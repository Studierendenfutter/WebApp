import getData from "./getData";
import config from "../../config";

const url = config.BACKEND_URL + "/userCategories";

export default function getUserCategories() {
  return getData(url);
}
