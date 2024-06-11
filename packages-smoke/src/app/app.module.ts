import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NbThemeModule } from '@long3009/nebular-theme';
import { NbAuthModule } from '@long3009/nebular-auth';
import { NbSecurityModule } from '@long3009/nebular-security';
import { NbMomentDateModule } from '@long3009/nebular-moment';
import { NbDateFnsDateModule } from '@long3009/nebular-date-fns';
import { NbEvaIconsModule } from '@long3009/nebular-eva-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'packages-smoke' }),
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot(),
    NbSecurityModule.forRoot(),
    NbMomentDateModule,
    NbDateFnsDateModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
