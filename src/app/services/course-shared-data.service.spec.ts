import { TestBed } from '@angular/core/testing';

import { CourseSharedDataService } from './course-shared-data.service';

describe('CourseSharedDataService', () => {
  let service: CourseSharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
