import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import { SET_SUBMIT_EDIT_USER } from "../../../redux/types/DrawerCyberbugsType";
import {
	CREATE_USER_SAGA,
	TOGGLE_PASSWORDS,
} from "../../../redux/types/UserCyberbugType";

export default function FormCreateUser(props) {
	const { isShowPassWord } = useSelector((state) => state.UserCyberbugsReducer);
	const dispatch = useDispatch();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: "",
			name: "",
			phoneNumber: "",
			passWord: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string()
				.required("Email is required!")
				.email("Email invalid!"),
			name: Yup.string().required("Name is required!"),
			passWord: Yup.string()
				.min(4, "Password too short!")
				.max(30, "Password is too long!")
				.required("Password is required!"),
			phoneNumber: Yup.string()
				.matches(/^\d+$/, "Phone number invalid!")
				.required("Phone number is required!"),
		}),

		// Create user onSubmit 
		onSubmit: (values) => {
			dispatch({
				type: CREATE_USER_SAGA,
				newUser: values,
			});
		},
	});

	const { values, touched, errors, handleChange, handleSubmit } = formik;
	useEffect(() => {
		dispatch({
			type: SET_SUBMIT_EDIT_USER,
			submitFunction: handleSubmit,
		});
	}, [dispatch, handleSubmit]);

	return (
		<form className='container' onSubmit={handleSubmit}>
			<div className='form-group'>
				<p className="font-bold text-base mt-3 mb-2">User Name</p>
				<input
					name='name'
					className='form-control w-full p-2 text-base rounded-md'
					value={values.name}
					onChange={handleChange}
				/>
				{errors.name && touched.name ? (
					<div className='text-red-500' style={{ fontSize: "0.8rem" }}>
						{errors.name}
					</div>
				) : null}
			</div>

			<div className='form-group relative'>
				<p className="font-bold text-base mt-3 mb-2">Email</p>
				<input
					name='email'
					className='form-control w-full p-2 text-base rounded-md'
					value={values.email}
					onChange={handleChange}
				/>
				{errors.email && touched.email ? (
					<div className='text-red-500' style={{ fontSize: "0.8rem" }}>
						{errors.email}
					</div>
				) : null}
			</div>

			<div className='form-group'>
				<p className="font-bold text-base mt-3 mb-2">Password</p>
				<input
					type={isShowPassWord ? "text" : "password"}
					name='passWord'
					className='form-control w-full p-2 text-base rounded-md'
					value={values.passWord}
					onChange={handleChange}
				/>
				<div
					className="absolute right-10 cursor-pointer"
					onClick={() => {
						dispatch({
							type: TOGGLE_PASSWORDS,
						});
					}}>
					{values.passWord !== "" ? (
						isShowPassWord ? (
							<i className='fas fa-eye-slash'></i>
						) : (
							<i className='fas fa-eye'></i>
						)
					) : (
						""
					)}
				</div>
			</div>

			{errors.passWord && touched.passWord ? (
				<div className='text-red-500' style={{ fontSize: "0.8rem" }}>
					{errors.passWord}
				</div>
			) : null}

			<div className='form-group'>
				<p className="font-bold text-base mt-3 mb-2">Phone number</p>
				<input
					name='phoneNumber'
					className='form-control w-full p-2 text-base rounded-md'
					value={values.phoneNumber}
					onChange={handleChange}
				/>
				{errors.phoneNumber && touched.phoneNumber ? (
					<div className='text-red-500' style={{ fontSize: "0.8rem" }}>
						{errors.phoneNumber}
					</div>
				) : null}
			</div>
		</form>
	);
}
