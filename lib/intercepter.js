import axios from "axios";

export const baseURL = "https://amma-ma-backend.vercel.app/";
// export const baseURL = "http://localhost:5000/";

const instance = axios.create({
  baseURL,
  headers: {},
});

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("amma-ma");
    if (token) {
      config.headers.Authorization = `Bearer ${token} `;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
