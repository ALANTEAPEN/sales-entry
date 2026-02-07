import axios from "axios";

const api = axios.create({
  baseURL: "http://84.46.255.88:3999"
});

export default api;