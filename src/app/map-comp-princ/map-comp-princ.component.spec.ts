import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCompPrincComponent } from './map-comp-princ.component';

describe('MapCompPrincComponent', () => {
  let component: MapCompPrincComponent;
  let fixture: ComponentFixture<MapCompPrincComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCompPrincComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCompPrincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
