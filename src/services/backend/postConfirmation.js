import config from "../../config";
import postData from "./postData";

export default function postConfirmation(userId, code) {
  const url = config.BACKEND_URL + "/users/" + userId + "/confirm";
  postData(url, { code });
}
