import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoUsuarioComponent } from './historico-usuario.component';

describe('HistoricoUsuarioComponent', () => {
  let component: HistoricoUsuarioComponent;
  let fixture: ComponentFixture<HistoricoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
