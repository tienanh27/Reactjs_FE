import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://shop.cyberlearn.vn",

  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use((config) => {
  let token = "";
  config.headers.Authorization = `Bearer ${token}`;

  // const token = await getFirebaseToken();
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },

  (error: any) => {
    // Handle errors
    if (error.response && error.response.status === 401) {
      console.log(123);
    }
    if (
      error.response &&
      error.response.status !== 404 &&
      error.response.status !== 401
    ) {
      console.log("error API");
    }
    throw error;
  }
);

export default axiosClient;
