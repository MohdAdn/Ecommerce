import axios from "axios";
const fetchData = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data;
};
export default fetchData;
