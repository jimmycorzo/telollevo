import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./styles/confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {
  @Input() pedido: string;

  constructor(private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: ConfirmacionPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    });
    modal.present();
  }

  continuar() {
    this.modalCtrl.dismiss();
  }


}
