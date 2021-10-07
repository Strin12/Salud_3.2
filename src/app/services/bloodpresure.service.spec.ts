import { TestBed } from '@angular/core/testing';

import { BloodpresureService } from './bloodpresure.service';

describe('BloodpresureService', () => {
  let service: BloodpresureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodpresureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
