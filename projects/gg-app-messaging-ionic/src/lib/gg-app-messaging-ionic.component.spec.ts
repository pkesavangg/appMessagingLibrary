import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgAppMessagingIonicComponent } from './gg-app-messaging-ionic.component';

describe('GgAppMessagingIonicComponent', () => {
  let component: GgAppMessagingIonicComponent;
  let fixture: ComponentFixture<GgAppMessagingIonicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgAppMessagingIonicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgAppMessagingIonicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
