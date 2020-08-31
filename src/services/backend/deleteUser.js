import config from "../../config";
import deleteData from "./deleteData";

export default function deleteUser(userId, code) {
  const url = config.BACKEND_URL + "/users/" + userId;
  deleteData(url, { code });
}
