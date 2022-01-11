import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MainLessonsComponent } from "./main-lessons.component";

describe("MainLessonsComponent", () => {
  let component: MainLessonsComponent;
  let fixture: ComponentFixture<MainLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainLessonsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
