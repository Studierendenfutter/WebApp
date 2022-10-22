import config from "../../config";
import getData from "./getData";

export default function getVoucher(voucherId) {
  const url = config.BACKEND_URL + "/vouchers/" + voucherId;
  return getData(url);
}
