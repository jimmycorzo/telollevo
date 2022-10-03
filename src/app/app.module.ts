import { APP_INITIALIZER, NgModule, Optional, PLATFORM_ID } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ComponentsModule } from 'app/components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { FirebaseService } from './services/firebase.service';
//import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { IonicStorageModule } from '@ionic/storage-angular';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { isPlatformServer, CommonModule } from '@angular/common';
// import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from 'app/app.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SwiperModule,
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    // IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    provideFirebaseApp(() => initializeApp(environment.config)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => {
      if (Capacitor.isNativePlatform()) {
        return initializeAuth(getApp(), {
          persistence: indexedDBLocalPersistence,
        });
      } else {
        return getAuth();
      }
    }),
    provideStorage(() => getStorage()),
  ],
  providers: [
    //  OneSignal, 
    FirebaseService,
    CallNumber,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: (platformId: object, response: any) => {
        return () => {
          // In the server.ts we added a custom response header with information about the device requesting the app
          if (isPlatformServer(platformId)) {
            if (response && response !== null) {
              // Get custom header from the response sent from the server.ts
              const mobileDeviceHeader = response.get('mobile-device');

              // Set Ionic config mode?
            }
          }
        };
      },
      // deps: [PLATFORM_ID, [new Optional(), RESPONSE]],
      deps: [PLATFORM_ID, [new Optional()]],
      multi: true
    },
  ],
  bootstrap: [AppComponent,
  ],
})
export class AppModule { }
