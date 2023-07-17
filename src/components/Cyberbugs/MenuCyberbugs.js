import { Menu } from 'antd';
import { AppstoreOutlined, ProjectOutlined, UserOutlined, ToolOutlined, UngroupOutlined, BookOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

export default function MenuCyberbugs(props) {
	return (
		<div className='menu'>
			<div className='account'>
				<div className='avatar'>
					<img src={require("../../assets/img/493753869479_4b703f4119efe3d7d0ff_512.png")} alt='logo' />
				</div>

				<div className='account-info'>
					<p className='mb-1 mb-1 text-lg' style={{ fontWeight: 'bold' }}>
						CyberLearn.vn
					</p>

					<p className='font-light mt-0 text-red-900 italic text-sm'>
						Report bugs
					</p>
				</div>
			</div>

			<Menu mode="vertical" theme="light">
				<Menu.Item key="cyberBoard" icon={<AppstoreOutlined />}>
					<NavLink to="/">
						<span><strong>Cyber Board</strong></span>
					</NavLink>
				</Menu.Item>

				{/* Project management */}
				<Menu.Item key="projectManagement" icon={<ProjectOutlined />}>
					<NavLink to="/projectmanagement">Projects Management</NavLink>
				</Menu.Item>

				{/* User management */}
				<Menu.Item key="userManagement" icon={<UserOutlined />}>
					<NavLink to="/usermanagement">Users Management</NavLink>
				</Menu.Item>

				{/* Project creation */}
				<Menu.Item key="createProject" icon={<ToolOutlined />}>
					<NavLink to="/createproject">Create Project</NavLink>
				</Menu.Item>

				<Menu.Divider />
				{/* Releases */}
				<Menu.Item key="releases" icon={<UngroupOutlined />}>
					<NavLink to="">Releases</NavLink>
				</Menu.Item>

				{/* Report */}
				<Menu.Item key="report" icon={<BookOutlined />}>
					<NavLink to="">Report</NavLink>
				</Menu.Item>


			</Menu>
		</div>
	);
}


