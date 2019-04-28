import { Injectable } from '@angular/core';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoLists: TodoList[] = [];

  constructor() { }

  addNewList(newList: TodoList) {
    this.todoLists.unshift(newList);
    console.log('Created new todo list');
  }

  getLists() {
    return this.todoLists;
  }
}
