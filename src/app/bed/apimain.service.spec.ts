import { TestBed } from '@angular/core/testing';

import { APIMAINService } from './apimain.service';

describe('APIMAINService', () => {
  let service: APIMAINService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIMAINService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
