import React, { useEffect, useState } from "react";
import getCanteenMeals from "../../services/backend/getCanteenMeals";
import getCanteenLastMealDate from "../../services/backend/getCanteenLastMealDate";
import getDateString from "../../services/utils/getDateString";
import useCanteens from "../../hooks/useCanteens";

export default function Canteens() {
  const city = "Münster";
  const date = getDateString();
  const canteens = useCanteens({ city });
  const [meals, setMeals] = useState({});
  const [lastMealDates, setLastMealDates] = useState({});

  useEffect(() => {
    async function fetchMeals(canteens) {
      const totalMeals = {};
      for (let cId in canteens) {
        const meals = await getCanteenMeals(canteens[cId].id, { date });
        totalMeals[canteens[cId].id] = meals;
      }
      setMeals(totalMeals);
    }

    async function fetchLastMealDates(canteens) {
      const totalMealDates = {};
      for (let cId in canteens) {
        const meals = await getCanteenLastMealDate(canteens[cId].id);
        totalMealDates[canteens[cId].id] = meals.date;
      }
      setLastMealDates(totalMealDates);
    }

    if (canteens) {
      fetchMeals(canteens);
      fetchLastMealDates(canteens);
    }
  }, [canteens, date]);

  return (
    <div>
      <div>
        {canteens &&
          canteens.map((c) => {
            const hasMeals = meals[c.id] && meals[c.id].length > 0;
            return (
              <div>
                <h2 style={{ color: hasMeals ? "green" : "red" }}>
                  {c.name} (
                  {lastMealDates[c.id] || "Noch kein Gericht in der Datenbank"})
                </h2>
                {hasMeals ? (
                  <div>
                    {meals[c.id].map((m) => (
                      <div>{m.name}</div>
                    ))}
                  </div>
                ) : (
                  <div>Heute keine Gerichte verfügbar</div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
