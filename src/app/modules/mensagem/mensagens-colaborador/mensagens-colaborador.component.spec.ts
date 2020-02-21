import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagensColaboradorComponent } from './mensagens-colaborador.component';

describe('MensagensColaboradorComponent', () => {
  let component: MensagensColaboradorComponent;
  let fixture: ComponentFixture<MensagensColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensagensColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagensColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
