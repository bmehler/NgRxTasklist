import { ITaskState } from "../app.state";
import { ADD_TASK, REMOVE_TASK } from "../actions/tasks";

const INITIAL_STATE: ITaskState = {
    all: []
}

export function tasksReducer(state = INITIAL_STATE, action:any):ITaskState {
    switch(action.type) {
        case ADD_TASK:
            return { all: [...state.all, action.payload]};
        case REMOVE_TASK:
            const filtered = state.all.filter(task => task.email !== action.payload.email)
            return {
                all: filtered,
            }
        default:
            return state;
    }
}