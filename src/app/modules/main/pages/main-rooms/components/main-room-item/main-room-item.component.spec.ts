import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRoomItemComponent } from './main-room-item.component';

describe('MainRoomItemComponent', () => {
  let component: MainRoomItemComponent;
  let fixture: ComponentFixture<MainRoomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRoomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
