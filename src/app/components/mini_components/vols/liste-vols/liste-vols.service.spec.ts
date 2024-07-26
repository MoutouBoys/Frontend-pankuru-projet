import { TestBed } from '@angular/core/testing';

import { ListeVolsService } from './liste-vols.service';

describe('ListeVolsService', () => {
  let service: ListeVolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeVolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
