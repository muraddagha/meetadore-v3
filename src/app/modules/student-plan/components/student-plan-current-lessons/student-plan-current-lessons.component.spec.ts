import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlanCurrentLessonsComponent } from './student-plan-current-lessons.component';

describe('StudentPlanCurrentLessonsComponent', () => {
  let component: StudentPlanCurrentLessonsComponent;
  let fixture: ComponentFixture<StudentPlanCurrentLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlanCurrentLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlanCurrentLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
