import getData from "./getData";
import config from "../../config";
import objectToQuery from "../../services/utils/objectToQuery";

export default function getCanteens(filter) {
  const query = objectToQuery(filter);
  const url = config.BACKEND_URL + "/canteens" + query;

  return getData(url);
}
