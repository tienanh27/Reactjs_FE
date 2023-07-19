import { message } from "antd";
import { useNavigate } from "react-router-dom";
import userApi from "../services/userApi";
import { TOKEN } from "../utils/constants/settingSystem";

function useAuth() {
  const navigate = useNavigate();
  const loginUser = async (data) => {
    try {
      const res = await userApi.signIn(data);
      console.log('login', res);
      message.success("Login Successfully");
      localStorage.setItem(TOKEN, res.data.content.accessToken);
      navigate("/");
    } catch (error) {
      message.error("Login Fail");
    }
  };
  const registerUser = async (data) => {
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
