import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardQuestionsComponent } from './board-questions.component';

describe('BoardQuestionsComponent', () => {
  let component: BoardQuestionsComponent;
  let fixture: ComponentFixture<BoardQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
