import { TestBed } from '@angular/core/testing';

import { SupportDetailService } from './support-detail.service';

describe('SupportDetailService', () => {
  let service: SupportDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
