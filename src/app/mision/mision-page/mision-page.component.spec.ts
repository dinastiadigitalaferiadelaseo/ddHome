import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisionPageComponent } from './mision-page.component';

describe('MisionPageComponent', () => {
  let component: MisionPageComponent;
  let fixture: ComponentFixture<MisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
