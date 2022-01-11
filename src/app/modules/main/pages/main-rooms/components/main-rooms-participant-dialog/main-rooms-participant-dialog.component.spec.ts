import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRoomsParticipantDialogComponent } from './main-rooms-participant-dialog.component';

describe('MainRoomsParticipantDialogComponent', () => {
  let component: MainRoomsParticipantDialogComponent;
  let fixture: ComponentFixture<MainRoomsParticipantDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRoomsParticipantDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRoomsParticipantDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
