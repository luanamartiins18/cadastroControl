import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioSiglaComponent } from './relatorio-sigla.component';

describe('RelatorioSiglaComponent', () => {
  let component: RelatorioSiglaComponent;
  let fixture: ComponentFixture<RelatorioSiglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioSiglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioSiglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
