import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";

import { SupportSurveyComponent } from "./support-survey.component";

describe("SupportSurveyComponent", () => {
  let component: SupportSurveyComponent;
  let fixture: ComponentFixture<SupportSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportSurveyComponent],
      imports: [HttpClientTestingModule, MatDialogModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
