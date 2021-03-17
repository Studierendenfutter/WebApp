import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  EmailIcon,
  EmailShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import getCanteenMeals from "../../services/backend/getCanteenMeals";
import getDateString from "../../services/utils/getDateString";

export default function ShareMeals() {
  const { canteenId } = useParams();
  const [, setCanteenWithMeals] = useState([]);
  const [shareData, setShareData] = useState("");

  const textFromMeals = (canteen) => {
    const text = `Zusammen Mittagessen gehen? Heute gibt es in dem Lokal "${
      canteen.name
    }" ${canteen.meals
      .map((meal) => `${meal.name}`)
      .join(", ")}. Alle Gerichte in ${
      canteen.city
    } findest du unter https://app.studierendenfutter.de/meals`;
    setShareData({
      title: text,
      url: "https://app.studierendenfutter.de/meals",
      style: { margin: "1em" },
    });
  };
  useEffect(() => {
    const fetch = async () => {
      const canteen = await getCanteenMeals(canteenId, {
        date: getDateString(),
      });
      setCanteenWithMeals(canteen[0]);
      textFromMeals(canteen[0]);
    };
    fetch();
  }, []); // eslint-disable-line
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#094249",
          color: "#FFFCDC",
          maxWidth: "600px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <p>
          <b>Text:</b> {shareData.title}
        </p>
        <div>
          <WhatsappShareButton {...shareData}>
            <WhatsappIcon size={115} round={true} iconFillColor="#FFFCDC" />
          </WhatsappShareButton>
          <TelegramShareButton {...shareData}>
            <TelegramIcon size={115} round={true} iconFillColor="#FFFCDC" />
          </TelegramShareButton>
          <FacebookMessengerShareButton {...shareData}>
            <FacebookMessengerIcon
              size={115}
              round={true}
              iconFillColor="#FFFCDC"
            />
          </FacebookMessengerShareButton>
          <EmailShareButton {...shareData}>
            <EmailIcon size={115} round={true} iconFillColor="#FFFCDC" />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}
