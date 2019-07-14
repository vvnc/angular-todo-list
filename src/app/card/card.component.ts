import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TodoList } from '../todo-list';
import { TodoItem } from '../todo-item';
import { concatMap, exhaustMap, mergeMap, merge } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() todoList: TodoList;
  @Output() deleteTodoList: EventEmitter<any> = new EventEmitter();

  private updateCounter = -1;

  todoListForm = this.fb.group({
    items: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoList.getItems().forEach(item => {
      this.todoListArray.push(this.fb.control(item.value));
    });

    // Сейчас форма настроена так, что valueChanges триггерится после любого ввода символа
    this.todoListForm.valueChanges
      .pipe(
        // Все запросы полетят на бэк параллельно:
        // mergeMap(changes => this.mockUpdate(changes))

        // Выстроит все update'ы в очередь, каждый следующий запрос не начнется,
        // пока не завершится предыдущий. Никакой ввод не продолбается, все в конце концов
        // улетит на бэк, но очередь может подтормаживать:
        concatMap(changes => this.mockUpdate(changes))

        // Будет игнорить весь ввод, пока текущий запрос на бэк не завершится.
        // Проигнорированный ввод продолбается и на бэк не отправится:
        //exhaustMap(changes => this.mockUpdate(changes))

        //merge(changes => this.mockUpdate(changes))
      )
      .subscribe((changes: { items: Array<string> }) => {
        return console.log(changes.items);
      });
  }

  private mockUpdate(changes) {
    console.log(`${++this.updateCounter} update started\nchanges:`, changes.items);
    const j = this.updateCounter;
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`${j} update finished`);
        resolve(changes);
      }, 2000);
    });
  }

  get todoListArray() {
    return this.todoListForm.get('items') as FormArray;
  }

  onAddTodoItem() {
    this.todoListArray.push(this.fb.control(''));
    this.todoList.addNewItem('', false);
  }

  onDeleteTodoItem(todoItemId: number) {
    // TODO: надо удолить из массива форм по индексу:
    //this.todoListArray.removeAt(this.todoListArray.value.findIndex(item => ));
    this.todoList.deleteItemById(todoItemId);
  }

  onDeleteTodoList($event: any) {
    this.deleteTodoList.emit({ event: $event, todoListId: this.todoList.id });
  }

  onDropTodoItem(event: CdkDragDrop<string[]>) {
    this.todoList.moveItemInList(event.previousIndex, event.currentIndex)
  }

  onTodoItemChecked($event: any, todoItemId: number) {
    this.todoList.updateItemCheckedById(todoItemId, $event.checked);
  }

  onTodoItemValueBlur($event: any, todoItemId: number) {
    this.todoList.updateItemValuedById(todoItemId, $event.srcElement.value);
  }
}
