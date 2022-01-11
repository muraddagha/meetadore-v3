import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMeetingsFormDialogComponent } from './main-meetings-form-dialog.component';

describe('MainMeetingsFormDialogComponent', () => {
  let component: MainMeetingsFormDialogComponent;
  let fixture: ComponentFixture<MainMeetingsFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMeetingsFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMeetingsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
