import { Injectable } from '@angular/core';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private listsCurrentAutoincrementId = 0;
  private todoLists: TodoList[] = [];

  constructor() { }

  createNewTodoList() {
    this.todoLists.unshift(
      new TodoList(this.listsCurrentAutoincrementId++));
  }

  findTodoListById(id: number) {
    this.todoLists.find((x) => x.id == id);
  }

  deleteTodoListById(id: number) {
    this.todoLists = this.todoLists.filter((x) => x.id != id);
  }

  getTodoLists() {
    return this.todoLists;
  }
}
