import axios from "axios";

const api = axios.create();

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.assign("/");
    }
    return error;
  }
);

export default api;
