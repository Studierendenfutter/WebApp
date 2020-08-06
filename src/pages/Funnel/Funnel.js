import React, { useState, useEffect, useMemo } from "react";
import FunnelStep from "../../components/FunnelStep/FunnelStep";
import ProgressBar from "../../components/ProgressBar";
import useUserCategories from "../../hooks/useUserCategories";
import postUser from "../../services/backend/postUser";
import useCanteens from "../../hooks/useCanteens";

import "./Funnel.css";

const dayNames = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const mealTypes = [
  "Gerichte mit Fleisch",
  "Gerichte mit Fisch",
  "Vegetarische Gerichte",
  "Vegane Gerichte",
];

const prices = {
  students: "Preis für Studierende",
  employees: "Preis für Beschäftigte der Universität",
  other: "Preis für Nichtstudierende",
};

const TOTAL_FUNNEL_STEPS = 8;

export default function Funnel() {
  const [userData, setUserData] = useState({
    email: "",
    days: [true, true, true, true, true, true],
    semesterBreaks: true,
    meals: [true, true, true, true],
    places: [true, true, true],
    userCategoryId: 1,
    name: "",
    city: "Münster",
  });

  const canteens = useCanteens({ city: userData.city });

  useEffect(() => {
    if (!userData.canteens && canteens) {
      const cs = canteens.reduce((t, c) => {
        t[c.id] = true;
        return t;
      }, {});
      setUserData({ ...userData, canteens: cs });
    }
  }, [canteens, setUserData]); // eslint-disable-line

  const canteensByType = useMemo(() => {
    if (!canteens) return {};
    return canteens.reduce((t, c) => {
      const _t = { ...t };
      if (!c.type) return t;
      if (!_t[c.type]) {
        _t[c.type] = [];
      }
      _t[c.type].push(c);
      return _t;
    }, {});
  }, [canteens]);

  const userCategories = useUserCategories();

  const [funnelStep, setFunnelStep] = useState(0);

  const nextStep = () => {
    setFunnelStep(funnelStep + 1);
  };

  const updateUserData = (name, value) => {
    setUserData({ ...userData, [name]: value });
  };

  const toggleDay = (i) => {
    const _days = [...userData.days];
    _days[i] = !_days[i];
    updateUserData("days", _days);
  };

  const toggleMeals = (i) => {
    const _meals = [...userData.meals];
    _meals[i] = !_meals[i];
    updateUserData("meals", _meals);
  };

  const setCanteensByType = (type, checked) => {
    const _canteens = userData.canteens;
    for (let cId in canteensByType[type]) {
      _canteens[canteensByType[type][cId].id] = checked;
    }
    setUserData({ ...userData, canteens: _canteens });
  };

  const updateCanteen = (id, checked) => {
    const _canteens = userData.canteens;
    _canteens[id] = checked;
    setUserData({ ...userData, canteens: _canteens });
  };

  const nextStepButton = <button onClick={nextStep}>Weiter</button>;

  if (!userCategories) {
    return <div>Hey</div>;
  }
  return (
    <div>
      {funnelStep === 0 && (
        <FunnelStep title="Hey lass uns loslegen! Wie möchtest du dich anmelden?">
          <button onClick={nextStep}>
            In 7 Fragen schnell zum Individuellen Lunchletter
          </button>
          <button
            onClick={() => {
              setFunnelStep(99);
            }}
          >
            Direkt anmelden ohne individuelle Einstellungen
          </button>
        </FunnelStep>
      )}
      {funnelStep === 1 && (
        <FunnelStep title="Alles klar: Verrätst du uns zuerst, an welche Mail-Adresse wir den Lunchletter schicken sollen?">
          <input
            type="text"
            value={userData.email}
            onChange={(e) => {
              updateUserData("email", e.target.value);
            }}
          />
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 2 && (
        <FunnelStep
          title={`Perfekt du bekommst den Lunchletter an ${userData.email}! An welchen Tagen möchtest du den Lunchletter haben?`}
        >
          {dayNames.map((dayName, i) => (
            <div>
              <input
                type="checkbox"
                key={dayName}
                checked={userData.days[i]}
                onClick={() => {
                  toggleDay(i);
                }}
              />{" "}
              <label
                onClick={() => {
                  toggleDay(i);
                }}
              >
                {dayName}
              </label>
            </div>
          ))}
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 3 && (
        <FunnelStep title="Auch in den Semesterferien?">
          <button
            onClick={() => {
              updateUserData("semesterBreaks", true);
              nextStep();
            }}
          >
            ja
          </button>
          <button
            onClick={() => {
              updateUserData("semesterBreaks", false);
              nextStep();
            }}
          >
            nein
          </button>
        </FunnelStep>
      )}
      {funnelStep === 4 && (
        <FunnelStep
          title={`Ist notiert. Welche Gerichte sollen wir in deinen persönlichen Lunchletter aufnehmen?`}
        >
          {mealTypes.map((meal, i) => (
            <div>
              <input
                type="checkbox"
                key={meal}
                checked={userData.meals[i]}
                onClick={() => {
                  toggleMeals(i);
                }}
              />{" "}
              <label
                onClick={() => {
                  toggleMeals(i);
                }}
              >
                {meal}
              </label>
            </div>
          ))}
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 5 && (
        <FunnelStep
          title="Wunderbar. Für welche Orte möchtest du das Mittagsangebot angezeigt bekommen?
            Du kannst dies auch noch genauer festlegen:"
        >
          {Object.keys(canteensByType).map((type) => {
            const typeIsChecked = canteensByType[type].reduce(
              (t, c) => t || (userData.canteens && userData.canteens[c.id]),
              false
            );
            return (
              <div>
                <div>
                  <input
                    type="checkbox"
                    checked={typeIsChecked}
                    onChange={(e) => setCanteensByType(type, e.target.checked)}
                  />
                  <label
                    onClick={() => setCanteensByType(type, !typeIsChecked)}
                  >
                    {type}
                  </label>
                </div>
                <div className="sf-funnel-canteens-wrapper">
                  {typeIsChecked &&
                    canteensByType[type].map((canteen) => (
                      <div>
                        <input
                          type="checkbox"
                          checked={
                            userData.canteens && userData.canteens[canteen.id]
                          }
                          onChange={(e) =>
                            updateCanteen(canteen.id, e.target.checked)
                          }
                        />
                        <label
                          onClick={() =>
                            updateCanteen(
                              canteen.id,
                              !userData.canteens[canteen.id]
                            )
                          }
                        >
                          {canteen.name}
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 6 && (
        <FunnelStep
          title="Super, wir haben es fast geschafft. Jetzt müssen wir nur noch wissen, welchen Preis wir
        dir für die Mittagsgerichte anzeigen sollen:"
        >
          {Object.keys(prices).map((priceKey) => (
            <div>
              <input
                type="radio"
                key={priceKey}
                checked={userCategories[priceKey] === userData.userCategoryId}
                onClick={() =>
                  updateUserData("userCategoryId", userCategories[priceKey])
                }
              />
              <label
                onClick={() =>
                  updateUserData("userCategoryId", userCategories[priceKey])
                }
              >
                {prices[priceKey]}
              </label>
            </div>
          ))}
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 7 && (
        <FunnelStep
          title="Fertig, wir haben deinen Lunchletter konfiguriert. Sehr gerne würden wir dich auch mit
        Namen ansprechen:"
        >
          <input
            type="text"
            placeholder="Wie heißt du?"
            onChange={(e) => updateUserData("name", e.target.value)}
          />
          <label>
            Wir verwenden deinen Namen ausschließlich für die Personalisierung
            deiner Mails.
          </label>
          <button
            onClick={() => {
              postUser(userData);
              nextStep();
            }}
          >
            Weiter
          </button>
        </FunnelStep>
      )}
      {funnelStep === 8 && (
        <FunnelStep
          title={`Cool ${userData.name}! Wir haben dir gerade eine Bestätigungsmail gesendet. Bitte bestätige den
        Link um ab sofort den Lunchletter zu erhalten.`}
        />
      )}
      {funnelStep === 99 && (
        <FunnelStep title="Flott zu deinem Lunchletter: Dann benötigen wir nur noch deine Mailadresse:">
          <input type="text"></input>
        </FunnelStep>
      )}
      <div style={{ marginTop: "10px" }}>
        <ProgressBar
          percent={
            (Math.min(TOTAL_FUNNEL_STEPS, funnelStep + 1) * 100) /
            (TOTAL_FUNNEL_STEPS + 1)
          }
        />
      </div>
    </div>
  );
}
