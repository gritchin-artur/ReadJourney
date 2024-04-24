import axios from "axios";

axios.defaults.baseURL = `https://readjourney.b.goit.study/api`;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const refreshToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${refreshToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export default axios;
