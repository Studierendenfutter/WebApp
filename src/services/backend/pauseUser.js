import config from "../../config";
import getData from "./getData";

export default function pauseUser(userId, code, date) {
  const url =
    config.BACKEND_URL +
    "/users/" +
    userId +
    "/pause?code=" +
    code +
    "&pauseEnd=" +
    date;
  getData(url);
}
