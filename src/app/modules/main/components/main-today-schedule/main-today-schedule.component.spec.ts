import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MainTodayScheduleComponent } from "./main-today-schedule.component";

describe("MainTodayScheduleComponent", () => {
  let component: MainTodayScheduleComponent;
  let fixture: ComponentFixture<MainTodayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainTodayScheduleComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTodayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
