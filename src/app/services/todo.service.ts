import { Injectable } from '@angular/core';
import { TodoItemInterface } from '../interfaces/todo-item.interface';
//@ = dekorator  //

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //jakaś tablica
  todoList = [
    'tu bedzie lista todo',
    'next item',
    'next item'
  ]
  //inna tablica - jak wyżej ale rozszerzona=już nie ma ręcznie wpisyw
  todoListDB: Array<TodoItemInterface> = [
    //pojedynczy item todo

    {
      id: 0,
      description: 'Todo item 1',
      date: new Date(),
      isDone: false
    },
    {
      id: 1,
      description: 'Todo item 2',
      date: new Date(),
      isDone: true
    },
    {
      id: 2,
      description: 'Todo item 3',
      date: new Date(),
      isDone: true
    },
  ]



  constructor() { }

  onAddTodo(todoName: string) {
    // this.todoList.push("new item from method")
    let newId = this.todoListDB.length - 1;
    let newDescription = todoName;
    let newDate = new Date();
    let newIsDone = false;

    this.todoListDB.push({
      id: newId,
      description: newDescription,
      date: newDate,
      isDone: newIsDone
    })
  }
  onDeleteTodo(index: number) {
    this.todoListDB.splice(index, 1); //1 usuwa jeden element
  }
}
