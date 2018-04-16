import { TestBed, inject } from '@angular/core/testing';

import { AddSystemService } from './add-system.service';

describe('AddSystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSystemService]
    });
  });

  it('should be created', inject([AddSystemService], (service: AddSystemService) => {
    expect(service).toBeTruthy();
  }));
});
