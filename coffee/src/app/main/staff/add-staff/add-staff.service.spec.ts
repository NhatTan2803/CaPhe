import { TestBed, inject } from '@angular/core/testing';

import { AddStaffService } from './add-staff.service';

describe('AddStaffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddStaffService]
    });
  });

  it('should be created', inject([AddStaffService], (service: AddStaffService) => {
    expect(service).toBeTruthy();
  }));
});
