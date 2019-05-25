import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private service: TodoService) {
  }

  ngOnInit() {
  }

  onCreateNewTodoList() {
    this.service.createNewTodoList();
  }

  onDeleteTodoList($event: any) {
    this.service.deleteTodoListById($event.todoListId);
  }
}
