import React, { useState } from "react";
import FunnelStep from "../../components/FunnelStep/FunnelStep";

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

export default function Funnel() {
  const [userData, setUserData] = useState({
    email: "",
    days: [true, true, true, true, true, true],
    semesterBreak: true,
    meals: [true, true, true, true],
    places: [true, true, true],
    userGroup: "students",
    name: "",
  });

  const [funnelStep, setFunnelStep] = useState(0);

  const nextStep = () => {
    setFunnelStep(funnelStep + 1);
  };

  const lastStep = () => {
    setFunnelStep(funnelStep + 2);
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

  const nextStepButton = <button onClick={nextStep}>Weiter</button>;

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
              updateUserData("semesterBreak", true);
              nextStep();
            }}
          >
            ja
          </button>
          <button
            onClick={() => {
              updateUserData("semesterBreak", false);
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
          title="Super, wir haben es fast geschafft. Jetzt müssen wir nur noch wissen, welchen Preis wir
        dir für die Mittagsgerichte anzeigen sollen:"
        >
          {Object.keys(prices).map((priceKey) => (
            <div>
              <input
                type="radio"
                key={priceKey}
                checked={priceKey === userData.userGroup}
                onClick={() => updateUserData("userGroup", priceKey)}
              />
              <label onClick={() => updateUserData("userGroup", priceKey)}>
                {prices[priceKey]}
              </label>
            </div>
          ))}
          {nextStepButton}
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
          {nextStepButton}
        </FunnelStep>
      )}
      {funnelStep === 7 && (
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
    </div>
  );
}
