import React, { useEffect, useState } from "react";
import getCanteenMeals from "../../services/backend/getCanteenMeals";
import getDateString from "../../services/utils/getDateString";
import useCanteens from "../../hooks/useCanteens";

export default function Canteens() {
  const city = "Münster";
  const date = getDateString();
  const canteens = useCanteens({ city });
  const [meals, setMeals] = useState({});

  useEffect(() => {
    async function fetchMeals(canteens) {
      const totalMeals = {};
      for (let cId in canteens) {
        const meals = await getCanteenMeals(canteens[cId].id, { date });
        totalMeals[canteens[cId].id] = meals;
      }
      setMeals(totalMeals);
    }
    if (canteens) {
      fetchMeals(canteens);
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
                <h2 style={{ color: hasMeals ? "green" : "red" }}>{c.name}</h2>
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
