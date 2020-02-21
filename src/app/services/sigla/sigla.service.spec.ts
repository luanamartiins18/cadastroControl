import { TestBed } from '@angular/core/testing';

import { SiglaService } from './sigla.service';

describe('SiglaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiglaService = TestBed.get(SiglaService);
    expect(service).toBeTruthy();
  });
});
