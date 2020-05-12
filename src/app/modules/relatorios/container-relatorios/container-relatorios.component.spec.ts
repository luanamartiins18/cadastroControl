import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerRelatoriosComponent } from './container-relatorios.component';

describe('ContainerRelatoriosComponent', () => {
  let component: ContainerRelatoriosComponent;
  let fixture: ComponentFixture<ContainerRelatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerRelatoriosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
