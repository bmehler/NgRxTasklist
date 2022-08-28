import { Task } from "./shared/task";

export interface IAppState {
    tasks: ITaskState;
}

export interface ITaskState {
    all: Task[]
}