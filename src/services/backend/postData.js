import Axios from "axios";

export default function postData(url, data) {
  return Axios.post(url, data);
}
