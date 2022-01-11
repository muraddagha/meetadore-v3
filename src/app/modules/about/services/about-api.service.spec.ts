import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AboutApiService } from "./about-api.service";

describe("AboutApiService", () => {
  let service: AboutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AboutApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
