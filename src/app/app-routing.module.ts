import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { TodoComponent } from './components/todo/todo.component';

// dla ROUTINGU trzeba tu zmodyfikować tablicę
// przy defin.routów nie dodajemy slasha
const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "login", component: LoginFormComponent },
  { path: "dashboard", component: SecondComponent },
  { path: "app", component: ThirdComponent },
  { path: "todo", component: TodoComponent },
  // ** oznacza błędny wpis:
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
