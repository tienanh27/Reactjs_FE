import { Menu } from 'antd';
import { AppstoreOutlined, ProjectOutlined, UserOutlined, ToolOutlined, UngroupOutlined, BookOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;

export default function MenuCyberbugs(props) {
	const navLinkStyle = {
		textDecoration: 'none',
		borderBottom: 'none',
	};

	return (
		<div className='menu bg-[#222831]'>
			<div className='account flex items-center justify-center pb-4 pt-4'>
				<div className='avatar flex-shrink-0 w-11 h-11 rounded-full overflow-hidden '>
					<img src={require("../../assets/img/493753869479_4b703f4119efe3d7d0ff_512.png")} alt='logo' />
				</div>

				<div className='account-info ml-1.5'>
					<p className='mb-1 text-base font-bold text-slate-100 '>
						CyberLearn.vn
					</p>

					<p className='text-base italic text-slate-400 hover:text-sky-400'>
						Report bugs
					</p>
				</div>
			</div>

			<Menu mode="vertical" theme="dark" className="custom-menu bg-[#222831]">
				<Menu.Item key="cyberBoard" icon={<AppstoreOutlined />}>
					<NavLink to="">
						<span><strong>Cyber Board</strong></span>
					</NavLink>
				</Menu.Item>

				{/* Project management */}
				<Menu.Item key="projectManagement" icon={<ProjectOutlined />}>
					<NavLink to="/projectmanagement">Project Management</NavLink>
				</Menu.Item>

				{/* User management */}
				<Menu.Item key="userManagement" icon={<UserOutlined />}>
					<NavLink to="/usermanagement">User Management</NavLink>
				</Menu.Item>

				{/* Project creation */}
				<Menu.Item key="createProject" icon={<ToolOutlined />}>
					<NavLink to="/createproject">Create Project</NavLink>
				</Menu.Item>

				<Menu.Divider className='bg-slate-400'/>
				{/* Releases */}
				<Menu.Item key="releases" icon={<UngroupOutlined />}>
					<NavLink to="/">Releases</NavLink>
				</Menu.Item>

				{/* Report */}
				<Menu.Item key="report" icon={<BookOutlined />}>
					Report
				</Menu.Item>


			</Menu>
		</div>
	);
}
