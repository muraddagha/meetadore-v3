import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { MainNewsApiService } from "./main-news-api.service";

describe("MainNewsApiService", () => {
  let service: MainNewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MainNewsApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
