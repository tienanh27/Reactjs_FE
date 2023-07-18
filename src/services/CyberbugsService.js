import { rootService } from "./rootService";

const service = new rootService();
export const cyberbugsService = {
	//-------For User
	siginCyberbugs: (userLogin) => {
		return service.post(`Users/signin`, userLogin);
	},

	signupCyberbugs: (newUser) => {
		return service.post(`Users/signup`, newUser);
	},

	deleteUser: (idUser) => {
		return service.delete(`Users/deleteUser?id=${idUser}`);
	},

	editUser: (userUpdate) => {
		return service.put(`Users/editUser`, userUpdate);
	},

	getUsers: (keyWord) => {
		return service.get(`Users/getUser?keyword=${keyWord}`);
	},

	assignUserProject: (userAssign) => {
		return service.post(`Project/assignUserProject`, userAssign);
	},

	removeUserProject: (userRemove) => {
		return service.post(`Project/removeUserFromProject`, userRemove);
	},

	getUsersByProject: (projectId) => {
		return service.get(`Users/getUserByProjectId?idProject=${projectId}`);
	},

	//-----For Project
	createProject: (newProject) => {
		return service.post(`Project/createProjectAuthorize`, newProject);
	},

	getAllProject: () => {
		return service.get(`Project/getAllProject`);
	},

	getAllProjectCategory: () => {
		return service.get(`ProjectCategory`);
	},

	updateProject: (projectUpdate) => {
		return service.put(
			`Project/updateProject?projectId=${projectUpdate.id}`,
			projectUpdate
		);
	},

	deleteProject: (projectId) => {
		return service.delete(`Project/deleteProject?projectId=${projectId}`);
	},

	getProjectDetail: (projectId) => {
		return service.get(`Project/getProjectDetail?id=${projectId}`);
	},
};
