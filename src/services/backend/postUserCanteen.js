import config from "../../config";
import postData from "./postData";

export default function postUserCanteen(id, { userId, code }) {
  const url = config.BACKEND_URL + "/users/" + userId + "/canteens";
  postData(url, { code, canteenId: id });
}
