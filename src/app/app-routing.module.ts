import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { TodoComponent } from './components/todo/todo.component';

// dla ROUTINGU trzeba tu zmodyfikować tablicę
// przy defin.routów nie dodajemy slasha
const routes: Routes = [
  { path: "", component: FirstComponent },
  { path: "dashboard", component: SecondComponent },
  { path: "app", component: ThirdComponent },
  { path: "todo", component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
