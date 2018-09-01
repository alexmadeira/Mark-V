import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
  //baseURL: "http://api.myjson.com/bins/1db94o"
});

export default api;
