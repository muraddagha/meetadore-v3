import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutVersionComponent } from "./about-version.component";

describe("AboutVersionComponent", () => {
  let component: AboutVersionComponent;
  let fixture: ComponentFixture<AboutVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutVersionComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
