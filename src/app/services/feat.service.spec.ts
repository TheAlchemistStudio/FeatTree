import { TestBed, inject } from '@angular/core/testing';

import { FeatService } from './feat.service';

describe('FeatDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatService]
    });
  });

  it('should be created', inject([FeatService], (service: FeatService) => {
    expect(service).toBeTruthy();
  }));
});
