import React, { useEffect } from "react";
import getUrlParameter from "../../services/utils/getUrlParameter";

export default function Cancel() {
  //const uId = getUrlParameter("uId");
  //const code = getUrlParameter("code");

  useEffect(() => {
    console.log("Cancel here!");
  });

  return <div>Canceled</div>;
}
