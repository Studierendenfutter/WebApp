import config from "../../config";
import putData from "./putData";

export default function putUserSettings({ userId, code }, settings) {
  const url = config.BACKEND_URL + "/users/" + userId + "/settings";
  putData(url, { code, settings });
}
