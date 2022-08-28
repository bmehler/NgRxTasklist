import { combineReducers } from "redux";

import { IAppState } from "../app.state";
import { tasksReducer as tasks } from "./tasks";

export const reducer = combineReducers<IAppState>({
    tasks
})