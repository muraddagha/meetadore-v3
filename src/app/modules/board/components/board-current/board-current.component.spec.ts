import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCurrentComponent } from './board-current.component';

describe('BoardCurrentComponent', () => {
  let component: BoardCurrentComponent;
  let fixture: ComponentFixture<BoardCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
