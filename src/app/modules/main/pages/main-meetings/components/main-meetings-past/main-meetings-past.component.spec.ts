import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsPastComponent } from './main-meetings-past.component';

describe('MainMeetingsPastComponent', () => {
  let component: MainMeetingsPastComponent;
  let fixture: ComponentFixture<MainMeetingsPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
