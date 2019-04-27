import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private cards: any[];

  constructor() {
    this.cards = new Array(Math.floor(Math.random() * 100));
  }

  ngOnInit() {
  }

}
