import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverCarousselComponent } from './over-caroussel.component';

describe('OverCarousselComponent', () => {
  let component: OverCarousselComponent;
  let fixture: ComponentFixture<OverCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverCarousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
