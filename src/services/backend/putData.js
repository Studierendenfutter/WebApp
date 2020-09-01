import Axios from "axios";

export default function putData(url, data) {
  return Axios.put(url, data);
}
