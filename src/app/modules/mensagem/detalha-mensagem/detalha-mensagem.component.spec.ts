import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaMensagemComponent } from './detalha-mensagem.component';

describe('DetalhaMensagemComponent', () => {
  let component: DetalhaMensagemComponent;
  let fixture: ComponentFixture<DetalhaMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhaMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
