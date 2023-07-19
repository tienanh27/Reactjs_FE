import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Popconfirm, Input, Breadcrumb } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
	DELETE_USER_SAGA,
	EDIT_USER,
	GET_USERS_SAGA,
} from "../../../redux/types/UserCyberbugType";
import { OPEN_FORM } from "../../../redux/types/DrawerCyberbugsType";
import FormEditUser from "../../../components/Forms/FormEditUser/FormEditUser";
import FormCreateUser from "../../../components/Forms/FormCreateUser/FormCreateUser";

const { Search } = Input;

export default function UserManagement(props) {
	const { arrAllUser } = useSelector((state) => state.UserCyberbugsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: GET_USERS_SAGA,
			keyWord: "",
		});
	}, [dispatch]);

	const handleChange = (pagination, filters, sorter) => { };

	const columns = [
		// column definitions...

		{
			title: "Action",
			dataIndex: "",
			key: "action",
			render: (text, record) => {
				return (
					<div>
						<Button
							className="mr-2"
							onClick={() => {
								dispatch({
									type: OPEN_FORM,
									Component: <FormEditUser />,
									Title: "Edit User",
									NameButton: "Save",
								});
								dispatch({
									type: EDIT_USER,
									userEdit: record,
								});
							}}
						>
							<EditOutlined />
						</Button>
						<Popconfirm
							title="Delete this user?"
							onConfirm={() => {
								dispatch({
									type: DELETE_USER_SAGA,
									userId: record.userId,
								});
							}}
							okText="Yes"
							cancelText="No"
						>
							<Button danger>
								<DeleteOutlined />
							</Button>
						</Popconfirm>
					</div>
				);
			},
		},
	];

	const handleSubmitSearch = (value) => {
		dispatch({
			type: GET_USERS_SAGA,
			keyWord: value,
		});
	};

	return (
		<div className=" w-full ">
			<div className="container">
				<h3 className="mt-4 mb-2 text-2xl font-bold tracking-wider">
					Users Management
				</h3>

				<Breadcrumb>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>CyberLearn.vn</Breadcrumb.Item>
					<Breadcrumb.Item>Users Management</Breadcrumb.Item>
				</Breadcrumb>

				<Button
					type="primary"
					className="my-3 bg-blue-500 hover:bg-blue-600 text-white text-base px-2 py-1 rounded"
					onClick={() => {
						const action = {
							type: OPEN_FORM,
							Title: "Create User",
							Component: <FormCreateUser />,
							NameButton: "Create",
						};
						dispatch(action);
					}}
				>
					Create User
				</Button>

				<Search
					placeholder="Search..."
					allowClear
					enterButton="Search"
					onSearch={handleSubmitSearch}
					className="search-input"
					style={{ backgroundColor: "#393E46", color: "#FFFFFF" }}
				/>

				<Table
					columns={columns}
					dataSource={arrAllUser}
					onChange={handleChange}
					rowKey="userId"
					className="border-solid bg-zinc-900"
				/>
			</div>
		</div>
	);
}
