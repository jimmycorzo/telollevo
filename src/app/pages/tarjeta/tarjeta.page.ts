import { Component, OnInit, HostBinding, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DirectoriosModel } from 'app/models/directorios.model';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
// import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.page.html',
  styleUrls: [
    './styles/tarjeta.page.scss',
    './styles/tarjeta.shell.scss',
  ],
})

export class TarjetaPage implements OnInit, AfterViewInit {
  // Data passed in by componentProps
  @Input() directorio: DirectoriosModel;

  public didInit: boolean = false;

  @ViewChild('tarjeta', { static: false, read: ElementRef }) fab: ElementRef;

  subscriptions: Subscription;

  slidesOptions: any = {
    zoom: {
      toggle: true // Disable zooming to prevent weird double tap zomming on slide images
    },
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
    speed: 2000
  };

  @HostBinding('class.is-shell') get isShell() {
    return (this.directorio && this.directorio.isShell) ? true : false;
  }

  constructor(
    private modalCtrl: ModalController,
    public callNumber: CallNumber,
    private iab: InAppBrowser,

  ) { }

  ngOnInit() {
    // this.slide.update();
    this.didInit = true;
  }

  ngAfterViewInit() {

  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  checkout() {

  }

  CallPhoneNumber(phoneNumber): void {
    this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  openLink(link) {
    const browser = this.iab.create(link);
    // browser.executeScript(...);
    // browser.insertCSS(...);
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });
    browser.on('loadstart').subscribe((event) => {
      console.log('loadstart', event);
      // if (event.url === compareURL) {
      //   console.log('url', event.url);
      //   // this.navCtrl.setRoot(ConfirmationPage, {
      //   //   orderId: this.orderId
      //   // })
      //   browser.close();
      //   console.log('browser closed');
      // }
    }, err => {
      console.error('error', err);
    });
    browser.on('loaderror').subscribe((event) => {
      alert('loaderror: ' + event.message);
    });
    browser.on('exit').subscribe((event) => {
      // alert('exit: ' + event);
    });

    browser.show();
  }
}