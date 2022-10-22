import postData from "./postData";
import config from "../../config";

export default async function postVoucherUser(voucherId, userId, code) {
  const url =
    config.BACKEND_URL + "/vouchers/" + voucherId + "/users/" + userId;
  return await postData(url, { code });
}
