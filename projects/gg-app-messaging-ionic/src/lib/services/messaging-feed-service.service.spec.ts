import { TestBed } from '@angular/core/testing';

import { MessagingFeedServiceService } from './messaging-feed-service.service';

describe('MessagingFeedServiceService', () => {
  let service: MessagingFeedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagingFeedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
