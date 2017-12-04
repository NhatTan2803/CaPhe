import { TestBed, inject } from '@angular/core/testing';

import { AddShopService } from './add-shop.service';

describe('AddShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddShopService]
    });
  });

  it('should be created', inject([AddShopService], (service: AddShopService) => {
    expect(service).toBeTruthy();
  }));
});
