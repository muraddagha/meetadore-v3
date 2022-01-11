import { TestBed } from '@angular/core/testing';

import { MainMeetingsApiService } from './main-meetings-api.service';

describe('MainMeetingsApiService', () => {
  let service: MainMeetingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainMeetingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
