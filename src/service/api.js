import axios from "axios";

const api = axios.create({
  baseURL: "https://photographercorner-api.herokuapp.com"
});

export default api;
