import axios from "axios";
import { API_URL } from "../config";

const pokemonsApi = axios.create({
  baseURL: API_URL,
});

// Todo: configurar interceptores
pokemonsApi.interceptors.request.use((config) => {
  return config;
});

export default pokemonsApi;
