import axiosClient from "./axiosClient";

const userApi = {
  async signUp(data) {
    let url = `/api/Users/signup`;
    return axiosClient.post(url, data);
  },
  async signIn(data) {
    let url = `/api/Users/signin`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
