import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { GgAppMessagingIonicComponent } from './gg-app-messaging-ionic.component';
import { FeedComponent } from './components/feed/feed.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { FeedSettingsComponent } from './components/feed-settings/feed-settings.component';
import { FeedModalComponent } from './components/feed-modal/feed-modal.component';
import { FeedTemplatePipe } from './pipes/feed-template.pipe';
import { NowidowPipe } from './pipes/nowidow.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GgAppMessagingIonicService } from './gg-app-messaging-ionic.service';
import { IonicModule } from '@ionic/angular';

export interface LibConfig {
  apiUrl: string;
}

export const LibConfigService = new InjectionToken<LibConfig>('LibConfig');

@NgModule({
  declarations: [
    GgAppMessagingIonicComponent,
    FeedComponent,
    FeedItemComponent,
    FeedSettingsComponent,
    FeedModalComponent,
    FeedTemplatePipe,
    NowidowPipe,
  ],
  imports: [
    // IonicModule,
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GgAppMessagingIonicComponent
  ]
})
export class GgAppMessagingIonicModule {
  static forRoot(config: LibConfig): ModuleWithProviders<GgAppMessagingIonicModule> {
    return {
      ngModule: GgAppMessagingIonicModule,
      providers: [
        GgAppMessagingIonicService,
        {
          provide: LibConfigService,
          useValue: config
        }
      ]
    };
  }
}
