import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    SocialLoginModule,
    AngularFileUploaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
 
  ],
  providers: [{ useClass: IonicRouteStrategy, 
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '142070303481-ia0i3r7b5mjad561fov4s2do869mkq53.apps.googleusercontent.com'
          )
        },
      ]
    } as SocialAuthServiceConfig,
  }],

  bootstrap: [AppComponent],
})
export class AppModule {}
