import { TestBed } from '@angular/core/testing';

import { OrdemFornecimentoService } from './ordem-fornecimento-service';

describe('OrdemFornecimentoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdemFornecimentoService = TestBed.get(OrdemFornecimentoService);
    expect(service).toBeTruthy();
  });
});
