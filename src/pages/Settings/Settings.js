import React, { useMemo, useState } from "react";
import useSettings from "../../hooks/useSettings";
import getUrlParameter from "../../services/utils/getUrlParameter";
import FunnelStep from "../../components/FunnelStep/FunnelStep";
import { dayNames, mealTypes, prices, localNames } from "../../constants";
import useUserCanteens from "../../hooks/useUserCanteens";
import useCanteens from "../../hooks/useCanteens";
import useUserCategories from "../../hooks/useUserCategories";
import Checkmark from "../../components/Checkmark";
import RadioButton from "../../components/RadioButton";

import "./Settings.css";

const dayEnums = [
  "mondays",
  "tuesdays",
  "wednesdays",
  "thursdays",
  "fridays",
  "saturdays",
];

const mealEnums = [
  "meat_meals",
  "fish_meals",
  "vegetarian_meals",
  "vegan_meals",
];

export default function Settings() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");
  const [settings, setSettings, isLoadingSettings] = useSettings(uId, code);

  //load canteens in use or not in use
  const [userCanteens, addUserCanteen, removeUserCanteen] = useUserCanteens(
    uId,
    code
  );

  const canteens = useCanteens({ city: "Münster" });

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

  const setCanteensByType = (type, checked) => {
    const _canteens = [];
    for (let cId in canteensByType[type]) {
      _canteens.push(canteensByType[type][cId].id);
    }
    if (checked) {
      addUserCanteen(_canteens);
    } else {
      removeUserCanteen(_canteens);
    }
  };

  const updateCanteen = (id, checked) => {
    if (checked) {
      addUserCanteen(id);
    } else {
      removeUserCanteen(id);
    }
  };

  const userCategories = useUserCategories();

  const updateUserData = (name, value) => {
    setSettings({ ...settings, [name]: value });
  };

  const days = useMemo(() => dayEnums.map((e) => settings[e]), [settings]);

  const toggleDay = (i) => {
    setSettings({ ...settings, [dayEnums[i]]: !settings[dayEnums[i]] });
  };

  const toggleMeals = (i) => {
    setSettings({ ...settings, [mealEnums[i]]: !settings[mealEnums[i]] });
  };

  const [save, setSave] = useState(false);

  const saveUserDate = () => {
    setSave(true);
    setTimeout(() => setSave(false), 5000);
  };

  if (isLoadingSettings) {
    return <div>Loading...</div>;
  }
  return (
    <div className="sf-settings">
      <FunnelStep
        title={`An welchen Tagen möchtest du den Lunchletter erhalten?`}
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
                  checked: days[i],
                }}
              />
            </div>
          ))}
        </div>
      </FunnelStep>
      <FunnelStep
        title={`Welche Gerichte sollen wir in deinen persönlichen Lunchletter aufnehmen?`}
      >
        <div>
          {mealTypes.map((meal, i) => (
            <div>
              <Checkmark
                label={meal}
                inputProps={{
                  type: "checkbox",
                  key: meal,
                  checked: settings[mealEnums[i]],
                }}
                onClick={() => {
                  toggleMeals(i);
                }}
              />
            </div>
          ))}
        </div>
      </FunnelStep>
      <FunnelStep title="Für welche Orte möchtest du das Mittagsangebot angezeigt bekommen?">
        <div>
          {Object.keys(canteensByType).map((type) => {
            const typeIsChecked = canteensByType[type].reduce((t, c) => {
              return t || (userCanteens && !!userCanteens[c.id]);
            }, false);
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
                            checked: userCanteens && !!userCanteens[canteen.id],
                          }}
                          onClick={() =>
                            updateCanteen(canteen.id, !userCanteens[canteen.id])
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
      </FunnelStep>
      <FunnelStep title="Welchen Preis sollen wir dir für die Mittagsgerichte anzeigen?">
        <div>
          {Object.keys(prices).map((priceKey) => (
            <div>
              <RadioButton
                inputProps={{
                  type: "radio",
                  key: priceKey,
                  checked:
                    userCategories[priceKey] === settings["user_category_id"],
                }}
                onClick={() =>
                  updateUserData("user_category_id", userCategories[priceKey])
                }
                label={prices[priceKey]}
              />
            </div>
          ))}
        </div>
      </FunnelStep>
      <FunnelStep title="Willst du in den Semesterferien den Lunchletter erhalten?">
        <div>
          <div>
            <RadioButton
              inputProps={{
                type: "radio",
                key: "ja",
                checked: settings["semester_breaks"],
              }}
              onClick={() => updateUserData("semester_breaks", true)}
              label="Ja"
            />
            <RadioButton
              inputProps={{
                type: "radio",
                key: "nein",
                checked: !settings["semester_breaks"],
              }}
              onClick={() => updateUserData("semester_breaks", false)}
              label="Nein"
            />
          </div>
        </div>
      </FunnelStep>
      <FunnelStep title="Dein Name:">
        <input
          type="text"
          placeholder="Wie heißt du?"
          onChange={(e) => updateUserData("name", e.target.value)}
          value={settings.name}
        />
      </FunnelStep>
      {save && (
        <div style={{ textAlign: "center", color: "var(--primary-color)" }}>
          <label>Deine Einstellungen wurden gespeichert.</label>
        </div>
      )}
      <div className="sf-settings-buttons">
        <a
          className="sf-settings-cancel-link"
          href={
            "https://studierendenfutter.de/cancel?uId=" + uId + "&code=" + code
          }
        >
          Abmelden
        </a>
        <button className="sf-settings-button" onClick={saveUserDate}>
          Speichern
        </button>
      </div>
    </div>
  );
}
