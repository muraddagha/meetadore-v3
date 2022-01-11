import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MainWeatherComponent } from "./main-weather.component";

describe("MainWeatherComponent", () => {
  let component: MainWeatherComponent;
  let fixture: ComponentFixture<MainWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainWeatherComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
