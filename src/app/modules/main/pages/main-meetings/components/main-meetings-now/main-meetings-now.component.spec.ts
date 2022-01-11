import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsNowComponent } from './main-meetings-now.component';

describe('MainMeetingsNowComponent', () => {
  let component: MainMeetingsNowComponent;
  let fixture: ComponentFixture<MainMeetingsNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
