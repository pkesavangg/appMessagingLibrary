import { TestBed } from '@angular/core/testing';

import { FeedStorageService } from './feed-storage.service';

describe('FeedStorageService', () => {
  let service: FeedStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
