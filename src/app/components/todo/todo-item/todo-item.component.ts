import { Component, Input, OnInit } from '@angular/core';
import { TodoItemInterface } from 'src/app/interfaces/todo-item.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  //jeżeli chcemy przekaz.wartość z rodzica do dziecka,to używ. @Input:
  @Input() todoData: string;      //todoData=nasza nazwa
  @Input() todoItemData: TodoItemInterface;
  @Input() indexData: number;
  
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onTodoItemDelete(i: number){
    this.todoService.onDeleteTodo(i);
  }

}
