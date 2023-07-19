import React from "react";
import { message } from "antd";
import userApi from "../services/userApi";
import { Navigation, useNavigate } from "react-router-dom";
import { ISignIn, ISignUp } from "../types/input";

function useAuth() {
  const navigate = useNavigate();
  const loginUser = async (data: ISignIn) => {
    try {
      const res = await userApi.signIn(data);
      message.success("Login Successfully");
      localStorage.setItem("accessToken", res.data.content.accessToken);
      navigate("/home");
    } catch (error) {
      message.error("Login Fail");
    }
  };
  const registerUser = async (data: ISignUp) => {
    try {
      const res = await userApi.signUp(data);
      message.success("Register Successfully"); 
           
    } catch (error) {
      message.error("Email already in use !");
    }
  };
  return { loginUser, registerUser };
}
export default useAuth;
