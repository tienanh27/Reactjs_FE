import { applyMiddleware, combineReducers, createStore } from "redux";

import createMiddleWareSaga from "redux-saga";
import { DrawerCyberbugsReducer } from "./reducers/DrawerCyberbugsReducer";
import { HistoryReducer } from "./reducers/HistoryReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { ProjectReducer } from "./reducers/ProjectReducer";
import { UserCyberbugsReducer } from "./reducers/UserCyberbusReducer";
import { rootSaga } from "./sagas/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
	HistoryReducer,
	UserCyberbugsReducer,
	ProjectReducer,
	DrawerCyberbugsReducer,
	LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);
