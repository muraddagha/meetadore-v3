import { TestBed } from '@angular/core/testing';

import { MainDetailService } from './main-detail.service';

describe('MainDetailService', () => {
  let service: MainDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
