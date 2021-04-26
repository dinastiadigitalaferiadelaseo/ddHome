import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfertComponent } from './history-ofert.component';

describe('HistoryOfertComponent', () => {
  let component: HistoryOfertComponent;
  let fixture: ComponentFixture<HistoryOfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryOfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
