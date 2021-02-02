import React, { useState, useEffect, useMemo } from "react";
import FunnelStep from "../../components/FunnelStep/FunnelStep";
import ProgressBar from "../../components/ProgressBar";
import Checkmark from "../../components/Checkmark";
import useUserCategories from "../../hooks/useUserCategories";
import postUser from "../../services/backend/postUser";
import useCanteens from "../../hooks/useCanteens";
import { dayNames, mealTypes, prices, localNames } from "../../constants";

import "./Funnel.css";
import RadioButton from "../../components/RadioButton";

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
  const [emailValid, setEmailValid] = useState(true);
  const [agbValid, setAgbValid] = useState(true);
  const [canteensValid, setCanteensValid] = useState(true);
  const [lastEmailStep, setLastEmailStep] = useState();

  useEffect(() => {
    if (!userData.canteens && canteens) {
      const cs = canteens.reduce((t, c) => {
        t[c.id] = true;
        return t;
      }, {});
      setUserData({ ...userData, canteens: cs });
    }
  }, [canteens, setUserData]); // eslint-disable-line

  const checkEmail = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(userData.email).toLowerCase());
  };

  const checkCanteens = () => {
    return Object.values(userData.canteens).filter((c) => c).length !== 0;
  };

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

  const [agbAccepted, setAgbAccepted] = useState(false);

  const nextStep = () => {
    setFunnelStep(funnelStep + 1);
  };

  const lastStep = () => {
    setFunnelStep(funnelStep - 1);
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

  const nextStepButton = (
    <button className="sf-funnel-next-button" onClick={nextStep}>
      Weiter
    </button>
  );

  const lastStepButton = (
    <button className="sf-funnel-next-button" onClick={lastStep}>
      Zurück
    </button>
  );

  if (!userCategories) {
    return <div></div>;
  }
  return (
    <div className="sf-funnel">
      {funnelStep === 0 && (
        <FunnelStep title="Hey, lass uns loslegen! Wie möchtest du dich anmelden?">
          <div className="sf-funnel-button-group">
            <button className="sf-funnel-big-button" onClick={nextStep}>
              In 7 Fragen schnell zum <br />
              individuellen Lunchletter
            </button>
            <button
              className="sf-funnel-big-button"
              onClick={() => {
                setFunnelStep(99);
              }}
            >
              Direkt anmelden ohne <br />
              individuelle Einstellungen
            </button>
          </div>
        </FunnelStep>
      )}
      
      {funnelStep === 1 && (
        <FunnelStep
          title={`Alles klar: An welchen Tagen möchtest du deinen Lunchletter denn erhalten?`}
        >
          <div>
            {dayNames.map((dayName, i) => (
              <div>
                <Checkmark
                  label={dayName}
                  onClick={() => {
                    console.log("toggle");
                    toggleDay(i);
                  }}
                  inputProps={{
                    type: "checkbox",
                    key: dayName,
                    checked: userData.days[i],
                  }}
                />
              </div>
            ))}
          </div>

          <div>
            {lastStepButton}

            {nextStepButton}
          </div>
        </FunnelStep>
      )}
      {funnelStep === 2 && (
        <FunnelStep title="Auch in den Semesterferien?">
          <div>
            <button
              className="sf-funnel-big-button"
              onClick={() => {
                updateUserData("semesterBreaks", true);
                nextStep();
              }}
              style={{ marginRight: "2em" }}
            >
              Ja
            </button>
            <button
              className="sf-funnel-big-button"
              onClick={() => {
                updateUserData("semesterBreaks", false);
                nextStep();
              }}
            >
              Nein
            </button>
          </div>
          {lastStepButton}
        </FunnelStep>
      )}
      {funnelStep === 3 && (
        <FunnelStep
          title={`Ist notiert. Welche Gerichte sollen wir in deinen persönlichen Lunchletter aufnehmen?`}
        >
          <div>
            {mealTypes.map((meal, i) => (
              <div>
                <Checkmark
                  label={meal}
                  inputProps={{
                    type: "checkbox",
                    key: meal,
                    checked: userData.meals[i],
                  }}
                  onClick={() => {
                    toggleMeals(i);
                  }}
                />
              </div>
            ))}
          </div>
          <div>
            {lastStepButton}

            {nextStepButton}
          </div>
        </FunnelStep>
      )}
      {funnelStep === 4 && (
        <FunnelStep
          title="Wunderbar. Für welche Orte möchtest du das Mittagsangebot angezeigt bekommen?
            Du kannst dies auch noch genauer festlegen:"
        >
          <div>
            {Object.keys(canteensByType).map((type) => {
              const typeIsChecked = canteensByType[type].reduce(
                (t, c) => t || (userData.canteens && userData.canteens[c.id]),
                false
              );
              return (
                <div>
                  <div>
                    <Checkmark
                      onClick={() => setCanteensByType(type, !typeIsChecked)}
                      label={localNames[type]}
                      inputProps={{ type: "checkbox", checked: typeIsChecked }}
                    />
                  </div>
                  <div className="sf-funnel-canteens-wrapper">
                    {typeIsChecked &&
                      canteensByType[type].map((canteen) => (
                        <div>
                          <Checkmark
                            inputProps={{
                              type: "checkbox",
                              checked:
                                userData.canteens &&
                                userData.canteens[canteen.id],
                            }}
                            onClick={() =>
                              updateCanteen(
                                canteen.id,
                                !userData.canteens[canteen.id]
                              )
                            }
                            label={canteen.name}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
          {!canteensValid && (
            <label>Bitte wähle mindestens ein Lokal aus.</label>
          )}
          <div>
            {lastStepButton}

            <button
              className="sf-funnel-next-button"
              onClick={() => {
                if (checkCanteens()) {
                  nextStep();
                  setCanteensValid(true);
                } else setCanteensValid(false);
              }}
            >
              Weiter
            </button>
          </div>
        </FunnelStep>
      )}
      {funnelStep === 5 && (
        <FunnelStep
          title="Super, wir haben es fast geschafft. Jetzt müssen wir nur noch wissen, welchen Preis wir
        dir für die Mittagsgerichte anzeigen sollen:"
        >
          <div>
            {Object.keys(prices).map((priceKey) => (
              <div>
                <RadioButton
                  inputProps={{
                    type: "radio",
                    key: priceKey,
                    checked:
                      userCategories[priceKey] === userData.userCategoryId,
                  }}
                  onClick={() =>
                    updateUserData("userCategoryId", userCategories[priceKey])
                  }
                  label={prices[priceKey]}
                />
              </div>
            ))}
          </div>
          <div>
            {lastStepButton}
            {nextStepButton}
          </div>
        </FunnelStep>
      )}
      {funnelStep === 6 && (
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
          <div>
            {lastStepButton}
            <button
              onClick={() => {
                postUser(userData);
                nextStep();
              }}
              className="sf-funnel-next-button"
            >
              Weiter
            </button>
          </div>
        </FunnelStep>
      )}
      {funnelStep === 7 && (
        <FunnelStep title={`Zack${
          userData.name ? " " + userData.name : ""
        }, das war's schon. Verrätst du uns noch, an welche Mail-Adresse wir deinen Lunchletter schicken sollen?`}>
          <input
            type="text"
            value={userData.email}
            onChange={(e) => {
              updateUserData("email", e.target.value.replace(" ", ""));
            }}
            placeholder="ich.habe@hunger.de"
          />
          {!emailValid && (
            <label>Bitte gib eine echte E-Mail-Adresse ein.</label>
          )}
          <div style={{ padding: "20px" }}>
            <Checkmark
              inputProps={{ type: "checkbox", checked: agbAccepted }}
              label={
                <span style={{ fontSize: "16px" }}>
                  Ich bin damit einverstanden, den Lunchletter per Mail zu
                  erhalten und stimme dafür der Verarbeitung meiner
                  personenbezogenen Daten gemäß der{" "}
                  <a
                    href="https://studierendenfutter.de/datenschutzerklaerung"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </span>
              }
              onClick={(e) => setAgbAccepted(e.target.checked)}
            />
            {!agbValid && (
              <label>
                Wir können dich nur zum Lunchletter anmelden, wenn du der
                Verarbeitung deiner Daten zustimmst.
              </label>
            )}
          </div>
          <div>
            {lastStepButton}
            {
              <button
                className="sf-funnel-next-button"
                onClick={() => {
                  if (checkEmail()) {
                    if (agbAccepted) {
                      setLastEmailStep(funnelStep);
                      nextStep();
                      setEmailValid(true);
                      setAgbValid(true);
                    } else setAgbValid(false);
                  } else setEmailValid(false);
                }}
              >
                Weiter
              </button>
            }
          </div>
        </FunnelStep>
      )}
      {funnelStep === 8 && (
        <FunnelStep
          title={`Cool${
            userData.name ? " " + userData.name : ""
          }! Wir haben dir gerade eine Bestätigungsmail an ${
            userData.email
          } gesendet. Bitte bestätige den
        Link um ab sofort den Lunchletter zu erhalten.`}
        >
          <p>
            Keine Bestätigungsmail erhalten? Das kannst du tun:
            <ul>
              <li>
                Entdeckst du hier einen Tippfehler: {userData.email}?{" "}
                <button
                  className="sf-button-link"
                  onClick={() => setFunnelStep(lastEmailStep)}
                >
                  Springe zurück
                </button>{" "}
                und korrigiere ihn schnell.
              </li>
              <li>
                Die Mail könnte in deinem Spamordner gelandet sein. Vielleicht
                hilft ein Blick dort hinein.
              </li>
              <li>
                Auch nicht im Spam gefunden? Schreib uns an{" "}
                <a href="mailto:moin@studierendenfutter.de">
                  moin@studierendenfutter.de
                </a>{" "}
                und wir helfen dir gerne weiter.
              </li>
            </ul>
          </p>
        </FunnelStep>
      )}
      {funnelStep === 99 && (
        <FunnelStep title="Flott zu deinem Lunchletter: Dann benötigen wir nur noch deine Mailadresse:">
          <input
            type="text"
            value={userData.email}
            onChange={(e) => {
              updateUserData("email", e.target.value.replace(" ", ""));
            }}
            placeholder="ich.habe@hunger.de"
          />
          {!emailValid && (
            <label>Bitte gib eine echte E-Mail-Adresse ein.</label>
          )}
          <div style={{ padding: "20px" }}>
            <Checkmark
              inputProps={{ type: "checkbox", checked: agbAccepted }}
              label={
                <span style={{ fontSize: "16px" }}>
                  Ich bin damit einverstanden, den Lunchletter per Mail zu
                  erhalten und stimme dafür der Verarbeitung meiner
                  personenbezogenen Daten gemäß der{" "}
                  <a
                    href="https://studierendenfutter.de/datenschutzerklaerung"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  zu.
                </span>
              }
              onClick={(e) => setAgbAccepted(e.target.checked)}
            />
            {!agbValid && (
              <label>
                Wir können dich nur zum Lunchletter anmelden, wenn du der
                Verarbeitung deiner Daten zustimmst.
              </label>
            )}
          </div>
          <div>
            <button
              className="sf-funnel-next-button"
              onClick={() => {
                setFunnelStep(0);
              }}
            >
              Zurück
            </button>
            <button
              className="sf-funnel-next-button"
              onClick={() => {
                if (checkEmail()) {
                  if (agbAccepted) {
                    setLastEmailStep(funnelStep);
                    postUser(userData);
                    setFunnelStep(TOTAL_FUNNEL_STEPS);
                    setEmailValid(true);
                    setAgbValid(true);
                  } else setAgbValid(false);
                } else setEmailValid(false);
              }}
            >
              Weiter
            </button>
          </div>
        </FunnelStep>
      )}
      <div style={{ marginTop: "10px" }}>
        {funnelStep > 0 && (
          <ProgressBar
            percent={
              (Math.min(TOTAL_FUNNEL_STEPS, funnelStep) * 100) /
              TOTAL_FUNNEL_STEPS
            }
          />
        )}
      </div>
    </div>
  );
}
