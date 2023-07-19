import React from "react";
import { Formik, Form } from "formik";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { CustomInput, Button } from "../../components";
import ImageBG from "../../assets/images/right_side.svg";
import * as Yup from 'yup'; // ok
import { ISignUp } from "../../types/input";

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
    <SContainer>
      <SForm>
        <Formik 
          initialValues={{
            email: "",
            passWord: "",
            name: "",
            phoneNumber: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values: ISignUp) => {
            registerUser(values);
          }}
        >
          {({ errors, touched, }) => (
          <Form>
            <h1>Register </h1>
            <p>Unlock all Features!</p>
            <CustomInput icon={<AiOutlineUser size={20} />}
              name="name"
              placeholder="Enter Your Name"
            />
            {errors.name && touched.name && (
              <div style={{ color: 'red' }}>{errors.name}</div>
            )}
            <CustomInput icon={<AiOutlineMail size={20} />}
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
            <Button text="REGISTER" />
          </Form>
          )}
        </Formik>
      </SForm>
      <SImg>
        <img src={ImageBG} alt="" />
      </SImg>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 767px) {
    padding: 0 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 15px;
  }
`;
const SForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15%;
`;

const SImg = styled.div`
  height: 900px;
  img {
    height: 100%;
    width: 100%;
  }
`;

export default Register;
