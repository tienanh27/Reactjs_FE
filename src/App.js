import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import DrawerCyberbugs from "./HOC/CyberbugsHOC/DrawerCyberbugs";
import UserManagement from "./pages/Cyberbugs/UserManagement/UserManagement";
import LoadingComponent from "./components/GlobalSetting/LoadingComponent";
import CyberBugsTemplate from "./templates/CyberbugsTemplate";
import CreateProject from "./pages/Cyberbugs/CreateProject/CreateProject";
import ProjectDetail from "./pages/Cyberbugs/ProjectDetail/ProjectDetail";
import ProjectManagement from "./pages/Cyberbugs/ProjectManagement/ProjectManagement";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_HISTORY } from "./redux/types/HistoryType";

function App() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: ADD_HISTORY,
			history: navigate,
		});
	}, [dispatch, navigate]);

	return (
		<>
			<LoadingComponent />
			<DrawerCyberbugs />

			<Routes>
				<Route path='/' element={<CyberBugsTemplate />}>
					<Route index element={<ProjectManagement />} />
					
					<Route path='createproject' element={<CreateProject />} />

					<Route path='projectmanagement' element={<ProjectManagement />} />

					<Route path='usermanagement' element={<UserManagement />} />

					<Route path='projectdetail/:projectId' element={<ProjectDetail />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
