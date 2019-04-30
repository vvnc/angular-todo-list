import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-list-card',
  templateUrl: './create-list-card.component.html',
  styleUrls: ['./create-list-card.component.css']
})
export class CreateListCardComponent implements OnInit {
  @Output() createTodoList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCreateNewTodoList() {
    this.createTodoList.emit(null);
  }
}
