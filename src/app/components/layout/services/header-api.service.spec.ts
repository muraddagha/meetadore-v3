import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { HeaderApiService } from "./header-api.service";

describe("HeaderApiService", () => {
  let service: HeaderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [HeaderApiService]
    });
    service = TestBed.inject(HeaderApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
