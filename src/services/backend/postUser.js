import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/users";

export default function postUser(data) {
  postData(url, data);
}
