import getUserCanteens from "../services/backend/getUserCanteens";
import { useState, useEffect } from "react";
import postUserCanteen from "../services/backend/postUserCanteen";
import deleteUserCanteens from "../services/backend/deleteUserCanteens";

export default function useUserCanteens(userId, code) {
  const [userCanteens, setUserCanteens] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const uc = await getUserCanteens(userId, code);
      const _uc = {};
      if (!uc) {
        setUserCanteens({});
        return;
      }
      for (let ucI in uc) {
        let canteen = uc[ucI];
        _uc[canteen.canteen_id] = canteen;
      }
      setUserCanteens(_uc);
    };

    fetch();
  }, []); // eslint-disable-line

  const addUserCanteen = (id) => {
    postUserCanteen(id, { userId, code });
  };

  const removeUserCanteen = (id) => {
    deleteUserCanteens([id], { userId, code });
  };

  return [userCanteens, addUserCanteen, removeUserCanteen];
}
