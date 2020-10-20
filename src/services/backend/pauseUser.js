import config from "../../config";
import getData from "./getData";

export default function pauseUser(userId, code) {
  const url = config.BACKEND_URL + "/users/" + userId + "/pause?code=" + code;
  getData(url);
}
