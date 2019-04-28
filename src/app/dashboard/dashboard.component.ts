import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { TodoList } from '../todo-list';

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

  addNewCard() {
    this.service.addNewList(new TodoList());
  }
}
