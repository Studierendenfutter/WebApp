import React from "react";
import useSettings from "../../hooks/useSettings";
import getUrlParameter from "../../services/utils/getUrlParameter";

export default function Settings() {
  const uId = getUrlParameter("uId");
  const code = getUrlParameter("code");
  const [settings, , isLoadingSettings] = useSettings(uId, code);

  if (isLoadingSettings) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(settings)}</div>;
}
