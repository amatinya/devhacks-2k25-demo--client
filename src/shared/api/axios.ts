import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default axios;
