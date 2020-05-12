import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorOfComponent } from './colaborador-of.component';

describe('ColaboradorOfComponent', () => {
  let component: ColaboradorOfComponent;
  let fixture: ComponentFixture<ColaboradorOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradorOfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaboradorOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
