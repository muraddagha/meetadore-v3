import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AboutGeneralComponent } from "./about-general.component";

describe("AboutGeneralComponent", () => {
  let component: AboutGeneralComponent;
  let fixture: ComponentFixture<AboutGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutGeneralComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
