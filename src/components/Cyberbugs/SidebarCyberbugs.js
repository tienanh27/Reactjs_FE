import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  FileOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_FORM } from "../../redux/types/DrawerCyberbugsType";
import { TOKEN, USER_LOGIN } from "../../utils/constants/settingSystem";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}

const items = [
  getItem("Search", "1", <SearchOutlined />),
  getItem("Create Task", "2", <PlusOutlined />),
  getItem("Documentary", "9", <FileOutlined />)
];

export default function SidebarCyberbugs() {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.UserCyberbugsReducer);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleSignOut = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN);
    navigate("/");
    window.location.reload();
  };

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
    // handle menu item click events if needed
  };

  const menu = (
    <Menu theme="light" onClick={handleMenuClick} selectedKeys={selectedKeys}>
      <Menu.Item key="1" icon={<LogoutOutlined />}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      style={{ backgroundColor: "#002140", height: "100vh" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
          marginBottom: collapsed ? "2.5rem" : 0
        }}
      >
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <Avatar
            src={userLogin.avatar}
            alt={userLogin.name}
            style={{
              marginRight: "2px",
              marginLeft: "4px",
              marginTop: "18px",
              cursor: "pointer",
              backgroundColor: "#EEEEEE",
              boxShadow: "0 0 9px 2px"
            }}
          >
            {userLogin.name && userLogin.name.charAt(0).toUpperCase()}
          </Avatar>
        </Dropdown>
        
      </div>
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        style={{ fontSize: "2rem" }}
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        onBlur={() => setSelectedKeys([])}
        style={{ backgroundColor: "#002140" }}
      />

      
    </Sider>
  );
}
