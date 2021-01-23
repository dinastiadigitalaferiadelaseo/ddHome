import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosconfigAdminComponent } from './proyectosconfig-admin.component';

describe('ProyectosconfigAdminComponent', () => {
  let component: ProyectosconfigAdminComponent;
  let fixture: ComponentFixture<ProyectosconfigAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosconfigAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosconfigAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
