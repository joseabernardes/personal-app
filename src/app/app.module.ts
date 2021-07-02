import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    NgxGoogleAnalyticsModule,
    NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        NgxGoogleAnalyticsModule.forRoot(environment.analyticsToken),
        NgxGoogleAnalyticsRouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
