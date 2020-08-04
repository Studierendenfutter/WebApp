import config from "../../config";
import getData from "./getData";

export default function getUserSettings({ uId, code }) {
  const url = config.BACKEND_URL + "/users/" + uId + "/settings?code=" + code;
  return getData(url);
}
