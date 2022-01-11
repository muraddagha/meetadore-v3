import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { SidebarApiService } from "./sidebar-api.service";

describe("SidebarApiService", () => {
  let service: SidebarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SidebarApiService]
    });
    service = TestBed.inject(SidebarApiService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
