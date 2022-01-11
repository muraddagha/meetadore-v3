import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPastComponent } from './board-past.component';

describe('BoardPastComponent', () => {
  let component: BoardPastComponent;
  let fixture: ComponentFixture<BoardPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
