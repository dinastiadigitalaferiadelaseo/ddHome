import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectHomeComponent } from './proyect-home.component';

describe('ProyectHomeComponent', () => {
  let component: ProyectHomeComponent;
  let fixture: ComponentFixture<ProyectHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
