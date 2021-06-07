import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THREElandComponent } from './threeland.component';

describe('THREElandComponent', () => {
  let component: THREElandComponent;
  let fixture: ComponentFixture<THREElandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ THREElandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(THREElandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
