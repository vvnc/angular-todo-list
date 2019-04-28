import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private todoItems: string[];

  constructor() {
  }

  ngOnInit() {
    this.todoItems = [];
  }

  addTodoItem() {
    this.todoItems.push("")
  }

}
