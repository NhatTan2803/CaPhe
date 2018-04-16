import { TestBed, inject } from '@angular/core/testing';

import { AddBossService } from './add-boss.service';

describe('AddBossService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddBossService]
    });
  });

  it('should be created', inject([AddBossService], (service: AddBossService) => {
    expect(service).toBeTruthy();
  }));
});
