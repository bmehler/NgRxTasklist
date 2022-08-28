import { Injectable, INJECTOR } from "@angular/core";

import { NgRedux } from "@angular-redux/store";

import { IAppState } from "../app.state";
import { Task } from "../shared/task";

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

@Injectable()
export class TasksActions {
    constructor(private redux: NgRedux<IAppState>) {}

    addSingle(task: Task) {
        this.redux.dispatch({ type: ADD_TASK, payload: task })
    }

    removeSingle(task: Task) {
        this.redux.dispatch({ type: REMOVE_TASK, payload: task})
    }
}