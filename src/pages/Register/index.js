import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { Button, CustomInput } from "../../components";
import ImageBG from "../../assets/img/right_side.svg";
import * as Yup from 'yup';

function Register() {
  const { loginUser, registerUser } = useAuth();
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number').required('Phone number is required'),
  });

  return (
    <section className="w-full flex flex-wrap bg-gray-100">

      {/* Register section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center h-screen">
        <Formik
          initialValues={{
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            registerUser(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="max-w-lg">
              <h1 className="text-5xl font-bold mb-10">Register</h1>
              <p className="text-gray-500 font-bold">Unlock all Features!</p>
              <CustomInput
                icon={<AiOutlineUser size={20} />}
                name="name"
                placeholder="Enter Your Name"
              />
              {errors.name && touched.name && (
                <div style={{ color: 'red' }}>{errors.name}</div>
              )}
              <CustomInput
                icon={<AiOutlineMail size={20} />}
                name="email"
                placeholder="Enter Your Email"
              />
              {errors.email && touched.email && (
                <div style={{ color: 'red' }}>{errors.email}</div>
              )}
              <CustomInput
                icon={<AiOutlinePhone size={20} />}
                name="phoneNumber"
                placeholder="Enter Your PhoneNumber"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <div style={{ color: 'red' }}>{errors.phoneNumber}</div>
              )}
              <CustomInput
                icon={<MdPassword size={20} />}
                type="password"
                name="passWord"
                placeholder="Enter Your PassWord"
              />
              <div>
                <button className="bg-indigo-500 text-white rounded font-semibold text-lg hover:bg-gray-700 p-2 mt-8 w-100 h-12">Register</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-3">
          Register Successfully ? <Link to="/login" className="text-indigo-500 font-semibold hover:underline"> Login here</Link>
        </div>
      </div>

      {/* Image section */}
      <div className="w-1/2">
        <img className="object-cover w-full h-screen hidden md:block" src={ImageBG} alt="" />
      </div>
    </section>
  );
}

export default Register;
