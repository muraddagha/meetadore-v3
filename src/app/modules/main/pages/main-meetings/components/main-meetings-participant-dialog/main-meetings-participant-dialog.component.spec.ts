import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsParticipantDialogComponent } from './main-meetings-participant-dialog.component';

describe('MainMeetingsParticipantDialogComponent', () => {
  let component: MainMeetingsParticipantDialogComponent;
  let fixture: ComponentFixture<MainMeetingsParticipantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsParticipantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsParticipantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
