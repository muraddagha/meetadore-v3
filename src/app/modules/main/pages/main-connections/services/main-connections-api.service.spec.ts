import { TestBed } from '@angular/core/testing';

import { MainConnectionsApiService } from './main-connections-api.service';

describe('MainConnectionsApiService', () => {
  let service: MainConnectionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainConnectionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
