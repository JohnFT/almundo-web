import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// routing
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UrlsEffects } from './store/effects/urls.effect';
import { appReducers } from './store/state/app.state';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducers),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UrlsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
