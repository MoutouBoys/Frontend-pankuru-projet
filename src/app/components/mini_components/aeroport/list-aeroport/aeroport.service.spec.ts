import { TestBed } from '@angular/core/testing';

import { AeroportService } from './aeroport.service';

describe('AeroportServiceService', () => {
  let service: AeroportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeroportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
