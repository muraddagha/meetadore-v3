import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { SupportApiService } from "./support-api.service";

describe("SupportApiService", () => {
  let service: SupportApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SupportApiService]
    });
    service = TestBed.inject(SupportApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
