import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsMissedComponent } from './main-meetings-missed.component';

describe('MainMeetingsMissedComponent', () => {
  let component: MainMeetingsMissedComponent;
  let fixture: ComponentFixture<MainMeetingsMissedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsMissedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsMissedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
