import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassPrevComponent } from './glass-prev.component';

describe('GlassPrevComponent', () => {
  let component: GlassPrevComponent;
  let fixture: ComponentFixture<GlassPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassPrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
