import getData from "./getData";
import config from "../../config";
import objectToQuery from "../utils/objectToQuery";

export default function getCanteenMeals(canteenId, filter) {
  const query = objectToQuery(filter);
  const url = config.BACKEND_URL + "/canteens/" + canteenId + "/meals" + query;

  return getData(url);
}
