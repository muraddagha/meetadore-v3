import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterTestingModule } from "@angular/router/testing";

import { SupportDetailComponent } from "./support-detail.component";

describe("SupportDetailComponent", () => {
  let component: SupportDetailComponent;
  let fixture: ComponentFixture<SupportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportDetailComponent],
      imports: [HttpClientTestingModule, MatDialogModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
