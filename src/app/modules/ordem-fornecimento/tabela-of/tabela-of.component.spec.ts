import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOfComponent } from './tabela-of.component';

describe('TabelaOfComponent', () => {
  let component: TabelaOfComponent;
  let fixture: ComponentFixture<TabelaOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaOfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
