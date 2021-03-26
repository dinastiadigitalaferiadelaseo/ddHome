import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticiparProyectComponent } from './participar-proyect.component';

describe('ParticiparProyectComponent', () => {
  let component: ParticiparProyectComponent;
  let fixture: ComponentFixture<ParticiparProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticiparProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticiparProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
