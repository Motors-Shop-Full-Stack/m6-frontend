import axios from "axios";

export const motorsShopAPI = axios.create({
  baseURL: "https://localhost:3000/",
});
