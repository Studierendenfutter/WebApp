import { useEffect, useState } from "react";
import getCanteens from "../services/backend/getCanteens";

export default function useCanteens(filter) {
  const [canteens, setCanteens] = useState();
  useEffect(() => {
    async function fetch() {
      const canteens = await getCanteens(filter);
      setCanteens(canteens);
    }
    fetch();
  }, []); // eslint-disable-line

  return canteens;
}
