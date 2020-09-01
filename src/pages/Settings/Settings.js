import React, { useMemo } from "react";
import useSettings from "../../hooks/useSettings";
import getUrlParameter from "../../services/utils/getUrlParameter";
import FunnelStep from "../../components/FunnelStep/FunnelStep";
import { dayNames, mealTypes, prices } from "../../constants";
import useUserCanteens from "../../hooks/useUserCanteens";
import useCanteens from "../../hooks/useCanteens";
import useUserCategories from "../../hooks/useUserCategories";

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
  //const [user, setUser] = useUser(uId, code);

  //load canteens in use or not in use
  const [userCanteens, addUserCanteen, removeUserCanteen] = useUserCanteens(
    uId,
    code
  );

  console.log(userCanteens);

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

  if (isLoadingSettings) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <FunnelStep
        title={`An welchen Tagen möchtest du den Lunchletter erhalten?`}
      >
        {dayNames.map((dayName, i) => (
          <div>
            <input
              type="checkbox"
              key={dayName}
              checked={days[i]}
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
      </FunnelStep>
      <FunnelStep
        title={`Welche Gerichte sollen wir in deinen persönlichen Lunchletter aufnehmen?`}
      >
        {mealTypes.map((meal, i) => (
          <div>
            <input
              type="checkbox"
              key={meal}
              checked={settings[mealEnums[i]]}
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
      </FunnelStep>
      <FunnelStep title="Für welche Orte möchtest du das Mittagsangebot angezeigt bekommen?">
        {Object.keys(canteensByType).map((type) => {
          const typeIsChecked = canteensByType[type].reduce(
            (t, c) => t || (userCanteens && userCanteens[c.id]),
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
                <label onClick={() => setCanteensByType(type, !typeIsChecked)}>
                  {type}
                </label>
              </div>
              <div className="sf-funnel-canteens-wrapper">
                {typeIsChecked &&
                  canteensByType[type].map((canteen) => (
                    <div>
                      <input
                        type="checkbox"
                        checked={userCanteens && !!userCanteens[canteen.id]}
                        onChange={(e) =>
                          updateCanteen(canteen.id, e.target.checked)
                        }
                      />
                      <label
                        onClick={() =>
                          updateCanteen(canteen.id, !userCanteens[canteen.id])
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
      </FunnelStep>
      <FunnelStep title="Welchen Preis sollen wir dir für die Mittagsgerichte anzeigen?">
        {Object.keys(prices).map((priceKey) => (
          <div>
            <input
              type="radio"
              key={priceKey}
              checked={
                userCategories[priceKey] === settings["user_category_id"]
              }
              onClick={() =>
                updateUserData("user_category_id", userCategories[priceKey])
              }
            />
            <label
              onClick={() =>
                updateUserData("user_category_id", userCategories[priceKey])
              }
            >
              {prices[priceKey]}
            </label>
          </div>
        ))}
      </FunnelStep>
      <FunnelStep title="Dein Name:">
        <input
          type="text"
          placeholder="Wie heißt du?"
          onChange={(e) => updateUserData("name", e.target.value)}
          value={settings.name}
        />
      </FunnelStep>
      <a href={"/cancel?uId=" + uId + "&code=" + code}>Abmelden</a>
    </div>
  );
}
