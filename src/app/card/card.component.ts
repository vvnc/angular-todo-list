import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoList } from '../todo-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() todoList: TodoList;
  @Output() deleteTodoList: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onAddTodoItem() {
    this.todoList.addNewItem('', false);
  }

  onDeleteTodoItem(todoItemId: number) {
    this.todoList.deleteItemById(todoItemId);
  }

  onDeleteTodoList($event: any) {
    this.deleteTodoList.emit({ event: $event, todoListId: this.todoList.id });
  }
}
