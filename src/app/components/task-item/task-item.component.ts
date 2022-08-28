import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Task } from 'src/app/shared/task';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tl-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() added = new EventEmitter<Task>();
  @Output() removed = new EventEmitter<Task>();

  fatrash = faTrashCan;

  state() {
    if(this.task.status == '1') {
      return 'backlog';
    } else if(this.task.status == '2') {
      return 'work';
    } else {
      return 'finished';
    }
  }

}