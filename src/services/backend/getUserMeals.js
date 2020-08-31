import getData from "./getData";
import config from "../../config";

export default function getUserMeals(userId, code) {
  const url = config.BACKEND_URL + "/users/" + userId + "/meals?code=" + code;
  return getData(url);
}
