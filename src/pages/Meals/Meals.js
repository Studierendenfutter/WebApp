import React, { useState, useEffect } from "react";
import getUrlParameter from "../../services/utils/getUrlParameter";
import getUserMeals from "../../services/backend/getUserMeals";
import formatPrice from "../../services/utils/formatPrice";

import "./Meals.css";
import getAllMeals from "../../services/backend/getAllMeals";
import getDateString from "../../services/utils/getDateString";

const cowIcon =
  "http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Cow-2@2x.png";
const fishIcon =
  "http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Fish.png";
const veganIcon =
  "http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegan.png";
const vegetarianIcon =
  "http://studierendenfutter.de/wp-content/uploads/2020/07/Icon-Vegetarian.png";

function getIconLinkFromNotes(tag) {
  if (tag === "vegetarian") {
    return vegetarianIcon;
  }

  if (tag === "vegan") {
    return veganIcon;
  }

  if (tag === "fish") {
    return fishIcon;
  }

  return cowIcon;
}

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function getShortDate() {
  const date = new Date();
  return date.getDate() + ". " + months[date.getMonth()];
}

export default function Meals() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetch() {
      if (uId && code && uId !== "" && code !== "")
        setMeals(await getUserMeals(uId, code));
      else {
        setMeals(await getAllMeals({ date: getDateString() }));
      }
    }
    fetch();
  }, []); // eslint-disable-line

  console.log(meals);
  return (
    <div
      className="sf-meals"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "400px" }}>
        <div style={{ height: "140px", background: "#004049" }}>
          <a href="https://studierendenfutter.de">
            <img
              alt="Kochmütze mit gekreutzten Gabel und Messer."
              style={{
                textAlign: "center",
                width: "100%",
                "margin-top": "15px",
              }}
              height="115"
              src="https://studierendenfutter.de/wp-content/uploads/2021/02/Header-Desktop-s.png"
            />
          </a>
          <div
            style={{
              "border-top": "10px solid #004049",
              "border-left": "200px solid #004049",
              "border-right": "200px solid #ffffff",
              "border-bottom": "10px solid #ffffff",
            }}
          ></div>
        </div>
        <p
          style={{
            fontSize: "24px",
            fontFamily: '"Amatic SC Regular",garamond,sans-serif',
            textAlign: "center",
            margin: "20px",
          }}
        >
          Hey,
          <br /> hier ist dein Mittagsmenü <br /> vom {getShortDate()}
        </p>
        <div>
          {meals && meals.length <= 0 && (
            <div>
              Heute gibt es leider keine Gerichte die deinen Kriterien
              entsprechen.
            </div>
          )}
          {meals.map((canteen) => {
            return (
              <div class="sf-email-canteen" style={{ textAlign: "left" }}>
                <h4
                  class="sf-email-canteen-card-header"
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    marginBottom: "7px",
                  }}
                >
                  {canteen.name}
                </h4>

                {Object.values(canteen.meals).map(
                  (meal) => (
                    <table
                      class="sf-email-meal"
                      style={{ marginLeft: "20px", marginBottom: "10px" }}
                    >
                      <tr>
                        <td
                          class="sf-email-meal-left"
                          style={{ width: "320px" }}
                        >
                          <p>{meal.name}</p>
                        </td>
                        <td
                          class="sf-email-meal-right"
                          style={{ width: "50px", textAlign: "center" }}
                        >
                          <p>
                            {meal.price
                              ? formatPrice(meal.price) + " €"
                              : formatPrice(meal.prices[0].price) + " €"}
                          </p>
                          {meal.types.map((type) => (
                            <img
                              alt="Meal Icon"
                              style={{ width: "20px" }}
                              src={getIconLinkFromNotes(type.name)}
                            />
                          ))}
                        </td>
                      </tr>
                    </table>
                  ),
                  ""
                )}
              </div>
            );
          }, "")}
        </div>
        <div class="sf-email-legend" style={{ textAlign: "left" }}>
          <h4
            class="sf-email-legend-title"
            style={{ fontSize: "20px", marginBottom: "7px" }}
          >
            Legende
          </h4>
          <table class="sf-email-legend-points" style={{ padding: "20px" }}>
            <tr>
              <td align="center" valign="middle" height="50">
                <img alt="cow" style={{ width: "20px" }} src={cowIcon} />
              </td>
              <td align="center" valign="middle" height="50">
                <img style={{ width: "20px" }} src={fishIcon} alt="fish" />
              </td>
              <td align="center" valign="middle" height="50">
                <img style={{ width: "20px" }} src={vegetarianIcon} />
              </td>
              <td align="center" valign="middle" height="50">
                <img style={{ width: "20px" }} src={veganIcon} />
              </td>
            </tr>
            <tr>
              <td
                align="center"
                valign="middle"
                height="50"
                style={{ width: "100px" }}
              >
                <span>Fleisch</span>
              </td>
              <td
                align="center"
                valign="middle"
                height="50"
                style={{ width: "100px" }}
              >
                <span>Fisch</span>
              </td>
              <td
                align="center"
                valign="middle"
                height="50"
                style={{ width: "100px" }}
              >
                <span>Vegetarisch</span>
              </td>
              <td
                align="center"
                valign="middle"
                height="50"
                style={{ width: "100px" }}
              >
                <span>Vegan</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
