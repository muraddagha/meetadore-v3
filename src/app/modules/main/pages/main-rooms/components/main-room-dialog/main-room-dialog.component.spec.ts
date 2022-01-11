import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRoomDialogComponent } from './main-room-dialog.component';

describe('MainRoomDialogComponent', () => {
  let component: MainRoomDialogComponent;
  let fixture: ComponentFixture<MainRoomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRoomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRoomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
