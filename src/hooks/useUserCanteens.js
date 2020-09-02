import getUserCanteens from "../services/backend/getUserCanteens";
import { useState, useEffect } from "react";
import postUserCanteen from "../services/backend/postUserCanteen";
import deleteUserCanteens from "../services/backend/deleteUserCanteens";

export default function useUserCanteens(userId, code) {
  const [userCanteens, setUserCanteens] = useState({});

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

  useEffect(() => {
    fetch();
  }, []); // eslint-disable-line

  const addUserCanteen = async (id) => {
    if (!Array.isArray(id)) {
      id = [id];
    }
    await postUserCanteen(id, { userId, code });
    fetch();
  };

  const removeUserCanteen = async (id) => {
    if (!Array.isArray(id)) {
      id = [id];
    }
    await deleteUserCanteens(id, { userId, code });
    fetch();
  };

  return [userCanteens, addUserCanteen, removeUserCanteen];
}
