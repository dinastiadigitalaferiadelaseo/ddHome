import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosHomeComponent } from './resultados-home.component';

describe('ResultadosHomeComponent', () => {
  let component: ResultadosHomeComponent;
  let fixture: ComponentFixture<ResultadosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
