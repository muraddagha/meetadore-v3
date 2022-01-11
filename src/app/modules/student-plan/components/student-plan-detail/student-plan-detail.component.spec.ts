import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlanDetailComponent } from './student-plan-detail.component';

describe('StudentPlanDetailComponent', () => {
  let component: StudentPlanDetailComponent;
  let fixture: ComponentFixture<StudentPlanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
