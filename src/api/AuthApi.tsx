import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:8000/api",
  baseURL: "https://mern-stack-project-3-eqpu.onrender.com/api",
});
