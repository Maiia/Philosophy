import { TestBed, inject } from '@angular/core/testing';

import { InMemoryDbServiceService } from './in-memory-db-service.service';

describe('InMemoryDbServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryDbServiceService]
    });
  });

  it('should be created', inject([InMemoryDbServiceService], (service: InMemoryDbServiceService) => {
    expect(service).toBeTruthy();
  }));
});
