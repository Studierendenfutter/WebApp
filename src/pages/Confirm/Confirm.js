import React, { useEffect } from "react";
import postConfirmation from "../../services/backend/postConfirmation";
import getUrlParameter from "../../services/utils/getUrlParameter";

export default function Confirm() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");
  useEffect(() => {
    postConfirmation(uId, code);
  });

  return <div>Confirmed</div>;
}
