import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFormComponent } from './components/template/list-form/list-form.component';
import { TaskFormComponent } from './components/template/task-form/task-form.component';

const routes: Routes = [
  {path: '',
  component: TaskFormComponent
  },
  {path: 'task',
  component: TaskFormComponent
  },
  {path: 'list',
  component: ListFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
