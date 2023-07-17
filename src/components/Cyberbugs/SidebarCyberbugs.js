import React, { useState } from "react";

// Import icons from Ant Design 
import { Layout, Menu } from "antd";
import { SearchOutlined, PlusOutlined, FileOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { OPEN_FORM } from "../../redux/types/DrawerCyberbugsType";

const { Sider } = Layout;


function getItem(label, key, icon, children) {
	return {
		key,
		icon,
		children,
		label,
	};
}

// Antd/ import icons: search + plus 
const items = [
	getItem("Search", "1", <SearchOutlined />),
	getItem("Create Task", "2", <PlusOutlined />),
	getItem('Documentary', '9', <FileOutlined />),
];

export default function SidebarCyberbugs() {
	const [state, setState] = useState({
		collapsed: true,
	});
	const dispatch = useDispatch();

	const toggle = () => {
		setState({
			collapsed: !state.collapsed,
		});
	};

	return (
		<Sider collapsible collapsed={state.collapsed} onCollapse={toggle}>
			<Menu
				theme="dark"
				mode="inline"
				items={items}
				className="mt-4"
				style={{ fontSize: "1rem" }}
				onClick={({ key, keyPath, domEvent }) => {
					// handle menu item click events if needed
				}}
			/>
		</Sider>
	);
}

