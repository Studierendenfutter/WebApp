import getUserCategories from "../services/backend/getUserCategories";
import { useState, useEffect } from "react";

export default function useUserCategories() {
  const [userCategories, setUserCategories] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const uc = await getUserCategories();
      const _uc = {};
      if (!uc) {
        setUserCategories({});
        return;
      }
      for (let i = 0; i < uc.length; i++) {
        _uc[uc[i].name] = uc[i].id;
      }
      setUserCategories(_uc);
    };

    fetch();
  }, []); // eslint-disable-line

  return userCategories;
}
