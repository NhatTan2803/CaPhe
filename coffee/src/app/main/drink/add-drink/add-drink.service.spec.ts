import { TestBed, inject } from '@angular/core/testing';

import { AddDrinkService } from './add-drink.service';

describe('AddDrinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddDrinkService]
    });
  });

  it('should be created', inject([AddDrinkService], (service: AddDrinkService) => {
    expect(service).toBeTruthy();
  }));
});
