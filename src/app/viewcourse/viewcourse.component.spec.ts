import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcourseComponent } from './viewcourse.component';

describe('ViewcourseComponent', () => {
  let component: ViewcourseComponent;
  let fixture: ComponentFixture<ViewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
