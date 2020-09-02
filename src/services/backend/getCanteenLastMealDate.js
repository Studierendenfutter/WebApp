import getData from "./getData";
import config from "../../config";

export default function getCanteenMeals(canteenId) {
  const url = config.BACKEND_URL + "/canteens/" + canteenId + "/lastMealDate";

  return getData(url);
}
