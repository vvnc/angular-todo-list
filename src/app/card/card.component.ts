import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../todo-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() todoList: TodoList;

  constructor() {
  }

  ngOnInit() {
  }

  addTodoItem() {
    this.todoList.addNewItem('', false);
  }

}
