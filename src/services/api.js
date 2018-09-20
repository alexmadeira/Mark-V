import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://ec2-54-233-83-34.sa-east-1.compute.amazonaws.com:3333/"
      : "http://ec2-54-233-83-34.sa-east-1.compute.amazonaws.com:3333/"
});

export default api;
