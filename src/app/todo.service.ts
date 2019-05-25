import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private listsCurrentAutoincrementId = 0;
  private todoLists: TodoList[] = [];
  private api$: Observable<any>;
  private todoLists$: Observable<TodoList[]>;
  private autoIncrementStart$: Observable<number>;

  constructor() {
    this.api$ = Observable.create(observer => {
      const sampleData = [
        {
          "itemsCurrentAutoincrementId": 8,
          "items": [
            {
              "id": 0,
              "value": "проснуться",
              "checked": true
            },
            {
              "id": 1,
              "value": "сходить на работу",
              "checked": true
            },
            {
              "id": 2,
              "value": "потерпеть",
              "checked": false
            },
            {
              "id": 3,
              "value": "вернуться с работы",
              "checked": false
            },
            {
              "id": 6,
              "value": "поесть",
              "checked": false
            },
            {
              "id": 4,
              "value": "посмотреть youtube",
              "checked": false
            },
            {
              "id": 7,
              "value": "порофлить с мемесов",
              "checked": false
            },
            {
              "id": 5,
              "value": "лечь спать",
              "checked": false
            }
          ],
          "id": 2
        },
        {
          "itemsCurrentAutoincrementId": 6,
          "items": [
            {
              "id": 5,
              "value": "item5",
              "checked": false
            },
            {
              "id": 3,
              "value": "item1",
              "checked": false
            },
            {
              "id": 1,
              "value": "item2",
              "checked": false
            },
            {
              "id": 4,
              "value": "item4",
              "checked": false
            },
            {
              "id": 2,
              "value": "item3",
              "checked": false
            }
          ],
          "id": 0
        }
      ]

      observer.next(sampleData);
      // observer.next([]);
      observer.complete();
    });

    this.todoLists$ = this.api$.pipe(
      map(data => data.map(x => new TodoList(x.id).copyFromObject(x)))
    );

    this.autoIncrementStart$ = this.api$.pipe(
      map(data => data.reduce((max, x) => x.id > max ? x.id : max, 0) + 1)
    );

    this.api$.subscribe(data => {
      console.log('recieved from api stream:', data);
    });

    this.todoLists$.subscribe((lists: TodoList[]) => {
      this.todoLists = lists;
      console.log('parsed data:', this.todoLists);
    });

    this.autoIncrementStart$.subscribe((start: number) => {
      this.listsCurrentAutoincrementId = start
      console.log('auto incremented ids start from:', this.listsCurrentAutoincrementId);
    });
  }

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
