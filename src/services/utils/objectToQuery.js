export default function objectToQuery(obj) {
  const query = Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");

  return query ? "?" + query : "";
}
