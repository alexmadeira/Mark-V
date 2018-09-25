import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://alexmadeira.com.br:3333/"
      : "http://alexmadeira.com.br:3333/"
});

export default api;
