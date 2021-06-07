import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnnoncesComponent } from './my-annonces.component';

describe('MyAnnoncesComponent', () => {
  let component: MyAnnoncesComponent;
  let fixture: ComponentFixture<MyAnnoncesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAnnoncesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnnoncesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
