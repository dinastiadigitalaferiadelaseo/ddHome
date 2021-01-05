import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeAdministracionComponent } from './admin-home-administracion.component';

describe('AdminHomeAdministracionComponent', () => {
  let component: AdminHomeAdministracionComponent;
  let fixture: ComponentFixture<AdminHomeAdministracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHomeAdministracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
