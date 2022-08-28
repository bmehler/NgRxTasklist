import { Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Task } from 'src/app/shared/task';
import { faBoxArchive } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tl-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormComponent {

  fasave = faBoxArchive;

  @Output() created = new EventEmitter<Task>();

  task:Task = {
    name:'',
    description: '',
    status: '1',
    title: '',
    email: ''    
  };

  submitted(form:any) {
    this.created.emit(new Task(
      form.controls['title'].value,
      form.controls['description'].value,
      form.controls['status'].value,
      form.controls['name'].value,
      form.controls['email'].value,
    ))
    form.reset();
  }
}