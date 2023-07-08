import axios from 'axios';
import {server} from "../index";

const axiosInstance = axios.create({
  baseURL:  `${server}`,
});

axiosInstance.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;