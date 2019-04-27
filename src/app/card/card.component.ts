import { Component, OnInit } from '@angular/core';

import { LoremIpsum } from "lorem-ipsum";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private static lorem: LoremIpsum = new LoremIpsum();
  private todoItems: string[];

  constructor() {
    const length = Math.floor(Math.random() * 10);
    this.todoItems = new Array(length);
    for (let i = 0; i < length; i++) {
      this.todoItems[i] = CardComponent.lorem
        .generateWords(Math.floor(Math.random() * 10));
    }

    CardComponent.lorem.generateWords(1);
  }

  ngOnInit() {
  }

}
