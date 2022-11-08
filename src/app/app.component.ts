import { SplashScreen } from '@capacitor/splash-screen';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HistoryHelperService } from './utils/history-helper.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { PushService } from './services/push.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { AuthenticationService } from './services/authentication.service';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //styleUrls: ['app.component.scss'],
  styleUrls: [
    './pages/side-menu/styles/side-menu.scss',
    './pages/side-menu/styles/side-menu.shell.scss',
    './pages/side-menu/styles/side-menu.responsive.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  version: string;
  textDir = 'ltr';
  // appPages = [
  //   {
  //     title: 'Ayuda',
  //     url: '/ayuda',
  //     ionicIcon: 'rocket-outline'
  //   },
  //   {
  //     title: 'Política de Privacidad',
  //     url: '/politica',
  //     ionicIcon: 'alert-circle-outline'
  //   },
  //   {
  //     title: 'Términos y Condiciones',
  //     url: '/terminos',
  //     ionicIcon: 'alert-circle-outline'
  //   },
  // ];
  constructor(
    // public historyHelper: HistoryHelperService,
    private router: Router,
    private platform: Platform,
    // private pushService: PushService,
    // private swUpdate: SwUpdate,
    private authService: AuthenticationService
  ) {
    this.version = environment.version;
    console.log('version:', this.version);
    this.initializeApp();
    authService.signInAnonymously();
  }

  async initializeApp() {
    console.log('initializeApp app');
    try {
      // this.router.navigate(['tabs/directorios']);
      console.log('Cierra SplashScreen 1');
      await SplashScreen.hide();
    } catch (err) {
      // console.log('This is normal in a browser', err);
    }

    this.platform.ready().then(() => {
      console.log('platform.ready');
      this.router.navigate(['tabs/directorios']);
      // this.pushService.configuracionInicial();
    })
  }

  signout() {
    this.authService.signout();
  }

  ngOnInit() {
    console.log('ngOnInit');
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.versionUpdates.subscribe(() => {
    //     var version = environment.version;
    //     if (confirm("Hay una nueva versión disponible (" + version + "). ¿Desea actualizar la versión actual?")) {
    //       window.location.reload();
    //       this.router.navigate(['tabs/directorios']);
    //     }
    //   });
    // }
  }

}
