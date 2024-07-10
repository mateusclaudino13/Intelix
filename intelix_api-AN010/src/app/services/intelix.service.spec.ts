import { TestBed } from '@angular/core/testing';

import { IntelixService } from './intelix.service';

describe('IntelixService', () => {
  let service: IntelixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntelixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
