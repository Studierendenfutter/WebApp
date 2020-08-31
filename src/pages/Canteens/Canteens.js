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
    async function fetchMeals(canteenId) {
      const meals = await getCanteenMeals(canteenId, { date });
      setMeals({ ...meals, [canteenId]: meals });
    }
    if (canteens) {
      for (let cId in canteens) {
        fetchMeals(canteens[cId].id);
      }
    }
  }, [canteens, date]);

  return (
    <div>
      <div>
        {canteens &&
          canteens.map((c) => (
            <div>
              <h2>{c.name}</h2>
              {meals[c.id] && meals[c.id].length > 0 ? (
                <div>
                  {meals[c.id].map((m) => (
                    <div>{m.name}</div>
                  ))}
                </div>
              ) : (
                <div>Heute keine Gerichte verfügbar</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
