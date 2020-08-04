import { useState, useEffect } from "react";
import getUserSettings from "../services/backend/getUserSettings";

export default function useSettings(uId, code) {
  const [settings, setSettings] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const _settings = await getUserSettings({ uId, code });
      setSettings(_settings);
      setIsLoading(false);
    }
    fetch();
  }, []); // eslint-disable-line

  return [settings, setSettings, isLoading];
}
