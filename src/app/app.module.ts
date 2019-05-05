import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { CreateListCardComponent } from './create-list-card/create-list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    CreateListCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
