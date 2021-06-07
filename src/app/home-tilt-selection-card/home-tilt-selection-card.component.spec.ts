import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTiltSelectionCardComponent } from './home-tilt-selection-card.component';

describe('HomeTiltSelectionCardComponent', () => {
  let component: HomeTiltSelectionCardComponent;
  let fixture: ComponentFixture<HomeTiltSelectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTiltSelectionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTiltSelectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
