import Axios from "axios";

export default async function getData(url) {
  try {
    const response = await Axios.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
