import { TestBed } from '@angular/core/testing';

import { DomicilieService } from './domicilie.service';

describe('DomicilieService', () => {
  let service: DomicilieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomicilieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
