import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndViewRowComponent } from './filter-and-view-row.component';

describe('FilterAndViewRowComponent', () => {
  let component: FilterAndViewRowComponent;
  let fixture: ComponentFixture<FilterAndViewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAndViewRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAndViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
