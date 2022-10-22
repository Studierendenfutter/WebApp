import React, { useState } from "react";
import { useParams } from "react-router";
import BigButton from "../../components/BigButton/BigButton";
import Checkmark from "../../components/Checkmark";
import useVoucher from "../../hooks/useVoucher";
import postVoucherUser from "../../services/backend/postVoucherUser";
import getUrlParameter from "../../services/utils/getUrlParameter";

const VOUCHER_REQUEST_NOT_SEND = "VOUCHER_REQUEST_NOT_SEND";
const VOUCHER_REQUEST_PENDING = "VOUCHER_REQUEST_PENDING";
const VOUCHER_REQUEST_SUCCESS = "VOUCHER_REQUEST_SUCCESS";
const VOUCHER_REQUEST_FAILURE = "VOUCHER_REQUEST_FAILURE";

export default function VoucherFunnel() {
  const { voucherId } = useParams();
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");

  const [wantsToReceiveEmail, setWantsToReceiveEmaill] = useState(false);
  const voucherWrapper = useVoucher(voucherId);
  const [voucherRequestStatus, setVoucherRequestStatus] = useState(
    VOUCHER_REQUEST_NOT_SEND
  );

  async function sendVoucherRequest() {
    try {
      setVoucherRequestStatus(VOUCHER_REQUEST_PENDING);
      const voucher_code = await postVoucherUser(voucherId, uId, code);
      setVoucherRequestStatus(VOUCHER_REQUEST_SUCCESS);
    } catch {
      setVoucherRequestStatus(VOUCHER_REQUEST_FAILURE);
    }
  }
  if (!voucherWrapper) {
    return (
      <div>
        <p>
          Hier solltest du eigentlich einen Gutschein bekommen. Leider
          funktioniert die Verbindung zum Server gerade nicht. Bitte versuche es
          später erneut.
        </p>
      </div>
    );
  }
  if (voucherWrapper.amountOfVoucherCodesAvailable === 0) {
    return (
      <div>
        <p>Leider sind keine Gutscheine mehr verfügbar.</p>
      </div>
    );
  }
  return (
    <div style={{ minHeight: "100px" }}>
      {voucherRequestStatus === VOUCHER_REQUEST_NOT_SEND && (
        <>
          <Checkmark
            inputProps={{
              type: "checkbox",
              checked: wantsToReceiveEmail,
            }}
            label={voucherWrapper.voucher.short_description}
            onClick={() => setWantsToReceiveEmaill(!wantsToReceiveEmail)}
          />
          <BigButton onClick={sendVoucherRequest}>GIMME THAT VOUCHER</BigButton>
        </>
      )}
      {voucherRequestStatus === VOUCHER_REQUEST_SUCCESS && (
        <>
          <p>
            Alles klaro, Gutschein kommt. Viel Spaß und guten Appetit bei Mach
            Mittag!
          </p>
        </>
      )}
      {voucherRequestStatus === VOUCHER_REQUEST_FAILURE && (
        <>
          <p>
            Ey shit. Da lief was schief. Probier es nochmal oder schreib uns ne
            Email.
          </p>
          <BigButton
            onClick={() => setVoucherRequestStatus(VOUCHER_REQUEST_NOT_SEND)}
          >
            NOCHMAL
          </BigButton>
        </>
      )}
    </div>
  );
}
