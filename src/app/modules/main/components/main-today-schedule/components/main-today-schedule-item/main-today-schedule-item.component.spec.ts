import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTodayScheduleItemComponent } from './main-today-schedule-item.component';

describe('MainTodayScheduleItemComponent', () => {
  let component: MainTodayScheduleItemComponent;
  let fixture: ComponentFixture<MainTodayScheduleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTodayScheduleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodayScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
