import postData from "./postData";
import config from "../../config";

const url = config.BACKEND_URL + "/stats";

export default async function fetchStatistics(password) {
  try {
    const response = await postData(url, { password });
    return response.data;
  } catch (e) {
    return null;
  }
}
