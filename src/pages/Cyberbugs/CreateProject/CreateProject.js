import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import from TinyMCE
import { Editor } from "@tinymce/tinymce-react";
import { Button, Select } from "antd";
import { useFormik } from "formik";
import {
	CREATE_PROJECT_SAGA,
	GET_PROJECT_CATEGORY_SAGA,
} from "../../../redux/types/ProjectCyberbugsType";

//import Notification function
import { notificationFunction } from "../../../utils/Notification/Notification";


//-------<<>>--------//
export default function CreateProject(props) {
	const dispatch = useDispatch();

	const arrProjectCategory = useSelector(
		(state) => state.ProjectReducer.arrProjectCategory
	);

	//Call API to take data
	useEffect(() => {
		dispatch({
			type: GET_PROJECT_CATEGORY_SAGA,
		});
	}, [dispatch]);

	//Take data from users
	const formik = useFormik({
		//binding object again
		enableReinitialize: true,

		initialValues: {
			projectName: "",
			description: "",
			//set 1st default value
			categoryId: arrProjectCategory[0]?.id,
		},

		// dispatch action 
		onSubmit: (values) => {
			if (values.projectName !== "") {
				dispatch({
					type: CREATE_PROJECT_SAGA,
					newProject: values,
				});
			} else {
				notificationFunction("error", "Project name is required!");
			}
		},
	});
	
	// Enable Editor 
	const { values, handleChange, handleSubmit, setFieldValue } = formik;

	//Enable Editor
	const handleEditorChange = (e) => {
		setFieldValue("description", e.target.getContent());
	};

	const handleChangeCategory = (value) => {
		setFieldValue("categoryId", value);
	};

	return (
		<div className='container mt-3 mr-4'>
			<h3 className='mt-3 mb-0 text-2xl font-bold tracking-wider'>
				Create project
			</h3>

			<form className='container' onSubmit={handleSubmit}>
				<div className='form-group mb-3'>
					<p className='text-base'>Name</p>
					<input
						type='text'
						name='projectName'
						className='form-control w-full p-2 text-base rounded-md'
						onChange={handleChange}
					/>
				</div>

				<div className='form-group mb-3'>
					<p className='text-base'>Description</p>

					{/* Insert code from TinyMCE  */}
					<Editor
						initialValue=''
						name='description'

						init={{
							height: 500,
							menubar: false,
							plugins: [
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"preview",
								"help",
								"wordcount",
							],
							toolbar:
								"undo redo | formatselect | " +
								"bold italic backcolor | alignleft aligncenter " +
								"alignright alignjustify | bullist numlist outdent indent | " +
								"removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
						onChange={handleEditorChange}
					/>
				</div>

				{/* ----------Project Category----------  */}
				<div className='form-group mb-4'>
					<p className='text-base'>Project Category</p>

					<Select
						className='form-control w-full py-2 text-base rounded-md'
						value={values.categoryId}
						onChange={handleChangeCategory}
						options={arrProjectCategory.map((item) => {
							return {
								value: item.id,
								label: item.projectCategoryName,
							};
						})}
					/>
				</div>

				{/*---------- insert button by antd ----------  */}
				<Button htmlType='submit' type='primary'>
					Create Project
				</Button>
			</form>
		</div>
	);
}
