import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsItemComponent } from './main-meetings-item.component';

describe('MainMeetingsItemComponent', () => {
  let component: MainMeetingsItemComponent;
  let fixture: ComponentFixture<MainMeetingsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
