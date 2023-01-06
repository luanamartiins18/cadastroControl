import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCandidatosComponent } from './cadastro-candidatos.component';

describe('CadastroCandidatosComponent', () => {
  let component: CadastroCandidatosComponent;
  let fixture: ComponentFixture<CadastroCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
