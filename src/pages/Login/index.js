import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import { CustomInput } from "../../components";
import useAuth from "../../hooks/useAuth";
import ButtonComponent from "../../components/button";
import ImageBG from "../../assets/img/right_side.svg";

function Login() {
  const { loginUser } = useAuth();
  return (
    <section className="flex flex-wrap bg-gray-100 ">

      {/* Login section  */}
      <div className="md:w-1/2 flex flex-col flex justify-center items-center h-screen">
        <Formik
          initialValues={{
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
          }}
          onSubmit={(values) => {
            loginUser(values);
          }}
        >
          <Form>
            <h1 className="text-5xl font-bold mb-10">Login to your Account</h1>
            <p className="text-gray-500 font-bold">Welcome back! Fill in form to go next step</p>

            <CustomInput
              icon={<AiOutlineMail size={20} />}
              name="email"
              placeholder="Enter Your Email"
            />

            <CustomInput
              icon={<MdPassword size={20} />}
              type="password"
              name="passWord"
              placeholder="Enter Your Password"
            />


            {/* Button  */}
            <div>
              <button className="bg-indigo-500 text-white rounded font-semibold text-lg hover:bg-gray-700 p-2 mt-8 w-full h-12">Log In</button>
            </div>

            <div className="mt-2">
              Don’t have an account ? <Link to="/register" className="text-indigo-500 font-semibold hover:underline ">Create an account</Link></div>


          </Form>

        </Formik>

      </div>

      {/* Image section  */}
      <div className="w-1/2 ">
        <img className="object-cover w-full h-screen hidden md:block" src={ImageBG} alt="" />
      </div>
    </section>
  );
}

export default Login;
