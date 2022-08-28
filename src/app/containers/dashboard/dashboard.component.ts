import { IAppState } from 'src/app/app.state';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { TasksActions } from 'src/app/actions/tasks';
import { Task } from 'src/app/shared/task';

@Component({
  selector: 'tl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  @select((state: IAppState) => state.tasks.all) tasks$!: Observable<Task[]>;

  constructor(private tasks: TasksActions) { }

  removed = false;
  added = false;

  addTask(task: Task) {
    this.tasks.addSingle(task);
    this.added = true;
  }

  removeTaskFormTaskList(task: Task) {
    this.tasks.removeSingle(task);
    this.removed = true;
  }
}