import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoItemInterface } from 'src/app/interfaces/todo-item.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  // do inputu zmienna do przechowywania:
  todoName: string = '';
  
  //pusta tablica string
  todoListData: string[] = [];
  // lub todoListData: Array<string> = [];

  todoDB: TodoItemInterface[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {  //gdy wchodzimy do komponentu,np. klikamy 'Todo'
    //przypisanie do nowej tablicy aby mieć dostep z poziomu komponentu
    this.todoListData = this.todoService.todoList;

    this.todoDB = this.todoService.todoListDB
  }

  onBtnClick(newTodoName: string) {
    this.todoService.onAddTodo(newTodoName);
  }

  // ngOnDestroy(){  //niszczone przy wyjściu z komponentu
  //   console.log(this.todoService.todoList);
  // }

}
