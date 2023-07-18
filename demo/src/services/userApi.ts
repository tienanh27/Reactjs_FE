import axiosClient from "./axiosClient";
import { ISignIn, ISignUp } from "../types/input";

const userApi = {
  async signUp(data: ISignUp) {
    let url = `/api/Users/signup`;
    return axiosClient.post(url, data);
  },
  async signIn(data: ISignIn) {
    let url = `/api/Users/signin`;
    return axiosClient.post(url, data);
  },
};

export default userApi;
