import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaOfComponent } from './detalha-of.component';

describe('DetalhaOfComponent', () => {
  let component: DetalhaOfComponent;
  let fixture: ComponentFixture<DetalhaOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhaOfComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhaOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
