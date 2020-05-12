import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasUsuarioComponent } from './tarefas-usuario.component';

describe('TarefasUsuarioComponent', () => {
  let component: TarefasUsuarioComponent;
  let fixture: ComponentFixture<TarefasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TarefasUsuarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
