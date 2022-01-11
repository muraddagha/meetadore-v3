import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material/dialog";

import { SupportMaterialsComponent } from "./support-materials.component";

describe("SupportMaterialsComponent", () => {
  let component: SupportMaterialsComponent;
  let fixture: ComponentFixture<SupportMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportMaterialsComponent],
      imports: [HttpClientTestingModule, MatDialogModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
