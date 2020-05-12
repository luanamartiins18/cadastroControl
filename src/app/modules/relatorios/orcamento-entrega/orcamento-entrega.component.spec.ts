import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoEntregaComponent } from './orcamento-entrega.component';

describe('OrcamentoEntregaComponent', () => {
  let component: OrcamentoEntregaComponent;
  let fixture: ComponentFixture<OrcamentoEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrcamentoEntregaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
