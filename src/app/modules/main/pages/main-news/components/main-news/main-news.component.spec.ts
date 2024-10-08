import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MainNewsComponent } from "./main-news.component";

describe("MainNewsComponent", () => {
  let component: MainNewsComponent;
  let fixture: ComponentFixture<MainNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainNewsComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
