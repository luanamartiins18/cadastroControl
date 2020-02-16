import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaMensagemComponent } from './nova-mensagem.component';

describe('NovaMensagemComponent', () => {
  let component: NovaMensagemComponent;
  let fixture: ComponentFixture<NovaMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
