import axios from "axios";

const API_URI = "http://localhost:3000/api/v1";

const instance = axios.create({
  baseURL: API_URI,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const ERROR_MESSAGE = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
};

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error.response ? error.response.status : null;
    const message = status ? ERROR_MESSAGE[status] || "Error" : "Network Error";
    return Promise.reject(new Error(message));
  },
);

export default instance;
