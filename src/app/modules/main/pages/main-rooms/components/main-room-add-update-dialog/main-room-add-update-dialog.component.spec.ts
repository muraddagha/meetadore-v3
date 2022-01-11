import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRoomAddUpdateDialogComponent } from './main-room-add-update-dialog.component';

describe('MainRoomAddUpdateDialogComponent', () => {
  let component: MainRoomAddUpdateDialogComponent;
  let fixture: ComponentFixture<MainRoomAddUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRoomAddUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRoomAddUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
