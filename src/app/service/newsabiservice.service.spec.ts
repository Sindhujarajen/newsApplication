import { TestBed } from '@angular/core/testing';

import { NewsabiserviceService } from './newsabiservice.service';

describe('NewsabiserviceService', () => {
  let service: NewsabiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsabiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
