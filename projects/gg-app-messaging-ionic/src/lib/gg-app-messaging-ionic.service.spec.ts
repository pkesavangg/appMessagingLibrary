import { TestBed } from '@angular/core/testing';

import { GgAppMessagingIonicService } from './gg-app-messaging-ionic.service';

describe('GgAppMessagingIonicService', () => {
  let service: GgAppMessagingIonicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GgAppMessagingIonicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
