import Axios from "axios";

export default function deleteData(url, data) {
  return Axios.delete(url, { data });
}
