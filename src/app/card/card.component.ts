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

  // onDeleteTodoItem(id: number) {
  //   this.todoList.deleteItemById(id);
  // }

  onDeleteTodoList($event: any) {
    this.deleteTodoList.emit({ event: $event, todoListId: this.todoList.id });
  }
}
