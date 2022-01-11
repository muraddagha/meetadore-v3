import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";

import { SupportFaqComponent } from "./support-faq.component";

describe("SupportFaqComponent", () => {
  let component: SupportFaqComponent;
  let fixture: ComponentFixture<SupportFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportFaqComponent],
      imports: [HttpClientTestingModule, MatDialogModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
