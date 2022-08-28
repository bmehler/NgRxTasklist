import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TasksActions } from './actions/tasks';
import { IAppState } from './app.state';
import { reducer } from './reducers/index';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskFormComponent,
    TaskItemComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    FontAwesomeModule,
  ],
  providers: [TasksActions],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private ngRedux: NgRedux<IAppState>) {
    this.ngRedux.configureStore(reducer, {} as IAppState)
  }
}
