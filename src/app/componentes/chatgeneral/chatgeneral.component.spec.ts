import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgeneralComponent } from './chatgeneral.component';

describe('ChatgeneralComponent', () => {
  let component: ChatgeneralComponent;
  let fixture: ComponentFixture<ChatgeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatgeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
