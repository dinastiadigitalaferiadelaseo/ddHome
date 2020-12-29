import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosSistemasComponent } from './proyectos-sistemas.component';

describe('ProyectosSistemasComponent', () => {
  let component: ProyectosSistemasComponent;
  let fixture: ComponentFixture<ProyectosSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
