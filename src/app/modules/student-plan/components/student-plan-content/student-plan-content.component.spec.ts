import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPlanContentComponent } from './student-plan-content.component';

describe('StudentPlanContentComponent', () => {
  let component: StudentPlanContentComponent;
  let fixture: ComponentFixture<StudentPlanContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentPlanContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPlanContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
