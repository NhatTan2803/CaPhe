import { TestBed, inject } from '@angular/core/testing';

import { ListShopService } from './list-shop.service';

describe('ListShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListShopService]
    });
  });

  it('should be created', inject([ListShopService], (service: ListShopService) => {
    expect(service).toBeTruthy();
  }));
});
