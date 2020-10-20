import React, { useEffect } from "react";
import getUrlParameter from "../../services/utils/getUrlParameter";
import pauseUser from "../../services/backend/pauseUser";

export default function Pause() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");

  useEffect(() => {
    pauseUser(uId, code);
  });

  return <div>Paused</div>;
}
