import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRoomsComponent } from './main-rooms.component';

describe('MainRoomsComponent', () => {
  let component: MainRoomsComponent;
  let fixture: ComponentFixture<MainRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
