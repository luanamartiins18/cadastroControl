import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemFornecimentoRelatorioComponent } from './ordem-fornecimento-relatorio.component';

describe('OrdemFornecimentoRelatorioComponent', () => {
  let component: OrdemFornecimentoRelatorioComponent;
  let fixture: ComponentFixture<OrdemFornecimentoRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdemFornecimentoRelatorioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemFornecimentoRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
