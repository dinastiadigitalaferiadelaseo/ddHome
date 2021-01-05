import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAdministracionComponent } from './proyectos-administracion.component';

describe('ProyectosAdministracionComponent', () => {
  let component: ProyectosAdministracionComponent;
  let fixture: ComponentFixture<ProyectosAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosAdministracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
