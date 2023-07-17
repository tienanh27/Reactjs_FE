import { all } from "redux-saga/effects";
import * as UserCyberbugs from "./Cyberbugs/UserCyberbugsSaga";
import * as ProjectCyberbugs from "./Cyberbugs/ProjectCyberbugsSaga";

export function* rootSaga() {
	yield all([
		//for Users

		UserCyberbugs.theoDoiSignin(),
		UserCyberbugs.theoDoiGetUsersSaga(),
		UserCyberbugs.theoDoiAssignUserProjectSaga(),
		UserCyberbugs.theoDoiRemoveUserProjectSaga(),
		UserCyberbugs.theoDoiGetUsersByProjectSaga(),
		UserCyberbugs.theoDoiSignupSaga(),
		UserCyberbugs.theoDoiEditUserSaga(),
		UserCyberbugs.theoDoiDeleteUserSaga(),
		UserCyberbugs.theoDoiCreateUserSaga(),
		UserCyberbugs.theoDoiGetUserSearchSaga(),

		//for Projects
		ProjectCyberbugs.theoDoiCreateProjectSaga(),
		ProjectCyberbugs.theoDoiGetAllProject(),
		ProjectCyberbugs.theoDoiGetProjectCategory(),
		ProjectCyberbugs.theoDoiUpdateProjectSaga(),
		ProjectCyberbugs.theoDoiDeleteProjectSaga(),
		ProjectCyberbugs.theoDoiGetProjectDetailSaga(),
	]);
}
