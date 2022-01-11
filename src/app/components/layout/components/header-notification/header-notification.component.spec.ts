import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderNotificationComponent } from "./header-notification.component";

describe("HeaderNotificationComponent", () => {
  let component: HeaderNotificationComponent;
  let fixture: ComponentFixture<HeaderNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderNotificationComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
