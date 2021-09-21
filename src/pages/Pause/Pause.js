import React, { useEffect, useState } from "react";
import getUrlParameter from "../../services/utils/getUrlParameter";
import pauseUser from "../../services/backend/pauseUser";
import DatePicker from "react-datepicker";
import BigButton from "../../components/BigButton/BigButton";

import "react-datepicker/dist/react-datepicker.css";
import "./Pause.css";
import { useHistory } from "react-router";

export default function Pause() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");
  const history = useHistory();
  const [date, setDate] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    let now = new Date();
    now.setDate(now.getDate() + 14);
    setDate(now);
  }, []);

  const pause = async () => {
    await pauseUser(uId, code, date.toISOString());
    setSuccess(true);
  };

  return (
    <div className="sf-pause-page">
      {success ? (
        <>
          <h1 style={{ textAlign: "center" }}>
            <strong>
              Bis Bald{" "}
              <span role="img" aria-label="Victory Emoji">
                ✌️
              </span>
              !
            </strong>
          </h1>
          <p style={{ textAlign: "center", marginBottom: "100px" }}>
            Alles klar, wir haben deinen Lunchletter pausiert. <br />
            Genieß deine Zeit, wir freuen uns schon darauf, dich wiederzusehen.
          </p>
        </>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>
            <strong>Bereit für Vacay?</strong>
          </h1>
          <p style={{ textAlign: "center" }}>
            Hier kannst du deinen Lunchletter pausieren. Bitte gib das Datum an,
            bis einschließlich dem du den Lunchletter pausieren möchtest.
          </p>
          <div className="sf-pause-wrapper">
            <DatePicker
              value={date}
              selected={date}
              label="Datum"
              dateFormat="dd.MM.yyyy"
              name="date"
              onChange={(date) => {
                setDate(date);
              }}
            />
            <BigButton style={{ marginTop: "1em" }} onClick={pause}>
              Bestätigen
            </BigButton>
          </div>
          <p style={{ textAlign: "center" }}>
            Du erhältst den Lunchletter dann wieder ab dem, auf dem von dir
            angegebenen Datum folgenden, Tag wieder. Ist das von dir angegebene
            Datum an einem Wochenende, erhältst du den Lunchletter am kommenden
            Montag wieder.
          </p>
          <div style={{ height: "200px" }} />
        </>
      )}
    </div>
  );
}
