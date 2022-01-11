import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlanPassedLessonsComponent } from './student-plan-passed-lessons.component';

describe('StudentPlanPassedLessonsComponent', () => {
  let component: StudentPlanPassedLessonsComponent;
  let fixture: ComponentFixture<StudentPlanPassedLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlanPassedLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlanPassedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
