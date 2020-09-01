import config from "../../config";
import deleteData from "./deleteData";

export default function postUserCanteen(ids, { userId, code }) {
  const url = config.BACKEND_URL + "/users/" + userId + "/canteens";
  return deleteData(url, { code, canteenIds: ids });
}
