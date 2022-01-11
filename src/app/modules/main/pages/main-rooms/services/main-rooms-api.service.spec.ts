import { TestBed } from '@angular/core/testing';

import { MainRoomsApiService } from './main-rooms-api.service';

describe('MainRoomsApiService', () => {
  let service: MainRoomsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainRoomsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
