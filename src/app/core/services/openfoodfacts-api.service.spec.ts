import { TestBed } from '@angular/core/testing';

import { OpenfoodfactsApiService } from './openfoodfacts-api.service';

describe('OpenfoodfactsApiService', () => {
  let service: OpenfoodfactsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenfoodfactsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
