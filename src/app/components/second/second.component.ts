import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  todoLista: string[] = [];
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoLista = this.todoService.todoList;
  }

}
