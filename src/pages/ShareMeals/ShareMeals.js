import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import getCanteenMeals from "../../services/backend/getCanteenMeals";
import getDateString from "../../services/utils/getDateString";
import "./ShareMeals.css";

export default function ShareMeals() {
  const { canteenId } = useParams();
  const [shareData, setShareData] = useState({});

  const [copied, setCopied] = useState(false);

  function copyText() {
    var tempInput = document.createElement("input");
    const text = shareData.text;
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  }

  const nativeShare = () => {
    console.log(window.navigator.canShare);
    if (window.navigator.canShare) {
      window.navigator.share({
        title: "Studierendenfutter",
        text: shareData.title,
      });
    }
  };

  const textFromMeals = (canteen) => {
    const text = `Hey, ${
      canteen.name
    } hat heute was Leckeres im Angebot. Möchtest du mit mir hingehen?\n${canteen.meals
      .map((meal) => `- ${meal.name}`)
      .join(
        "\n"
      )}\n\nDas tägliche Mittagsmenü gibt es im Lunchletter von Studierendenfutter. Jetzt kostenlos auf https://studierendenfutter.de`;
    setShareData({
      title: text,
      body: text,
      subject: `Hey, ${canteen.name} hat heute was Leckeres im Angebot.`,
      url: ".",
      style: { margin: "1em" },
    });
  };

  useEffect(() => {
    const fetch = async () => {
      const canteen = await getCanteenMeals(canteenId, {
        date: getDateString(),
      });
      textFromMeals(canteen[0]);
    };
    fetch();
  }, []); // eslint-disable-line

  return (
    <div className="sf-share-meal-page-wrapper">
      <div className="sf-share-meal-page-wrapper-inner">
        <div className="sf-share-meals-header-img-wrapper">
          <img
            src="https://studierendenfutter.de/wp-content/uploads/2021/03/Studierendenfutter-Logo-v2.-transparent-DUNKEL.png"
            alt="Gekreuzte Messer und Gabel unter einem Bachelorhut"
            className="sf-share-meals-header-img"
          />
        </div>
        <div>
          <h2 style={{ fontFamily: "Amatic SC", fontSize: "40px" }}>
            Gute Wahl!
          </h2>
          <p>
            Hier kannst du deinen Freund:innen das heutige Mittagsmenü schicken.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {window.navigator.canShare && (
            <div className="sf-share-meals-native" onClick={nativeShare}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                viewBox="0 0 24 24"
                width="40"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
              </svg>
            </div>
          )}

          <WhatsappShareButton {...shareData}>
            <WhatsappIcon size={60} round={true} iconFillColor="#094249" />
          </WhatsappShareButton>
          <TelegramShareButton {...shareData}>
            <TelegramIcon size={60} round={true} iconFillColor="#094249" />
          </TelegramShareButton>
          <FacebookMessengerShareButton {...shareData}>
            <FacebookMessengerIcon
              size={60}
              round={true}
              iconFillColor="#094249"
            />
          </FacebookMessengerShareButton>
          <div className="sf-copy-button" onClick={copyText}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="60"
              viewBox="0 0 37 37"
              width="60"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            </svg>
          </div>
        </div>
        {copied && (
          <div style={{ textAlign: "center", color: "#094249" }}>
            <label>In Zwischenablage kopiert.</label>
          </div>
        )}
        <div>
          <h4>Vorschau:</h4>
          <div className="sf-share-meal-text-box">
            <p
              dangerouslySetInnerHTML={{
                __html:
                  shareData.title && shareData.title.replace
                    ? shareData.title.split("\n").join("<br/>")
                    : "",
              }}
            />
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Amatic SC",
            fontSize: "40px",
          }}
        >
          Guten Appetit euch!
        </h2>
        <hr />
        <p style={{ margin: "40px 0" }}>
          Dir gefällt der Lunchletter und du möchtest uns unterstützen?
          <br /> Dann freuen wir uns sehr wenn du Freund:innen von uns erzählst.
          Dies kannst du einfach hier tun:
        </p>
      </div>
      <div>
        <a
          href="https://studierendenfutter.de/share"
          className="sf-share-meals-share-button"
        >
          Teilen
        </a>
      </div>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
