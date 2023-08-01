import axios from "axios";
import { getTokenFromLocalStorage } from "./localstorage";

const customFetch = axios.create({
  baseURL: "http://localhost:5000/api",
});

customFetch.interceptors.request.use((config) => {
  const token = getTokenFromLocalStorage();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default customFetch;
