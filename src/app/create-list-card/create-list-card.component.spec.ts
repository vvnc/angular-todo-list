import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateListCardComponent } from './create-list-card.component';

describe('CreateListCardComponent', () => {
  let component: CreateListCardComponent;
  let fixture: ComponentFixture<CreateListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
