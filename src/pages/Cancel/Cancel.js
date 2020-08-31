import React, { useEffect } from "react";
import getUrlParameter from "../../services/utils/getUrlParameter";
import deleteUser from "../../services/backend/deleteUser";

export default function Cancel() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");

  useEffect(() => {
    deleteUser(uId, code);
  });

  return <div>Canceled</div>;
}
