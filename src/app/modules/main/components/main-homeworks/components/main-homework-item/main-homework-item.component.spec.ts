import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeworkItemComponent } from './main-homework-item.component';

describe('MainHomeworkItemComponent', () => {
  let component: MainHomeworkItemComponent;
  let fixture: ComponentFixture<MainHomeworkItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeworkItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
