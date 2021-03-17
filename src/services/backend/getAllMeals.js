import getData from "./getData";
import config from "../../config";
import objectToQuery from "../utils/objectToQuery";

export default function getAllMeals(filter) {
  const query = objectToQuery(filter);
  const url = config.BACKEND_URL + "/meals/detailed" + query;
  return getData(url);
}
