import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MainHomeworksComponent } from "./main-homeworks.component";

describe("MainHomeworksComponent", () => {
  let component: MainHomeworksComponent;
  let fixture: ComponentFixture<MainHomeworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainHomeworksComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHomeworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
