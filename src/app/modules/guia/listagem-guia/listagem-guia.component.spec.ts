import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemGuiaComponent } from './listagem-guia.component';

describe('ListagemGuiaComponent', () => {
  let component: ListagemGuiaComponent;
  let fixture: ComponentFixture<ListagemGuiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemGuiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemGuiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
