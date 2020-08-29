import getData from "./getData";
import config from "../../config";

export default function getUserCanteens(userId, code) {
  const url =
    config.BACKEND_URL + "/users/" + userId + "/canteens?code=" + code;
  return getData(url);
}
