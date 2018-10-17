import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333"
      : "http://data.alexmadeira.com.br/"
});

export default api;
