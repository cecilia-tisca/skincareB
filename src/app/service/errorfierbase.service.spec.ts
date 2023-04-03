import { TestBed } from '@angular/core/testing';

import { ErrorfirebaseService } from './errorfierbase.service';

describe('ErrorfierbaseService', () => {
  let service: ErrorfirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorfirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
