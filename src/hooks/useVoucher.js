import { useEffect, useState } from "react";
import getVoucher from "../services/backend/getVoucher";

export default function useVoucher(voucherId) {
  const [voucher, setVoucher] = useState();
  useEffect(() => {
    async function fetch() {
      const voucher = await getVoucher(voucherId);
      setVoucher(voucher);
    }
    fetch();
  }, []); // eslint-disable-line

  return voucher;
}
