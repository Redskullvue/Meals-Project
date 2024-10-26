import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://www.themealdb.com/api/json/v1/1/",
  baseURL: process.env.VUE_APP_API,
});

export default axiosInstance;
