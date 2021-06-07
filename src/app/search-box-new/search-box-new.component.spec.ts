import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxNewComponent } from './search-box-new.component';

describe('SearchBoxNewComponent', () => {
  let component: SearchBoxNewComponent;
  let fixture: ComponentFixture<SearchBoxNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
