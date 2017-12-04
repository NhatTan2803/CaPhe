import { TestBed, inject } from '@angular/core/testing';

import { ListDrinkService } from './list-drink.service';

describe('ListDrinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDrinkService]
    });
  });

  it('should be created', inject([ListDrinkService], (service: ListDrinkService) => {
    expect(service).toBeTruthy();
  }));
});
