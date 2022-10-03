import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Subscription, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DireccionesModel } from 'app/models/direcciones.model';
import { FirebaseService } from 'app/services/firebase.service';
// import { MapsPage } from '../maps/maps.page';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./styles/direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {
  subscriptions: Subscription;

  direcciones: any;

  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    public firebaseService: FirebaseService,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.subscriptions = this.route.data
      .pipe(
        // Extract data for this page
        switchMap((resolvedRouteData: { source: Observable<any> }) => {
          return resolvedRouteData['data'].source;
        })
      )
      .subscribe((pageData) => {
        this.direcciones = pageData;
      }, (error) => console.log(error));
  }

  async openMaps(direccion: DireccionesModel) {
    // if (direccion == null) {
    //   direccion = new DireccionesModel();
    // }
    // let modal = await this.modalCtrl.create({
    //   component: MapsPage,
    //   cssClass: 'cart-modal',
    //   componentProps: {
    //     'direccion': direccion,
    //   }
    // });
    // modal.onWillDismiss().then(() => {
    //   // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    // });
    // modal.present();
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async showConfirm(direccion: DireccionesModel) {
    const alert = await this.alertController.create({
      header: 'Eliminar Dirección',
      subHeader: '¿desea eliminar esta dirección?',
      message: direccion.direccion, animated: true,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí',
          handler: () => {
            this.firebaseService.deleteDireccion(direccion);
          }
        }
      ]
    });

    await alert.present();
  }

  async delete(direccion: DireccionesModel) {
    this.showConfirm(direccion);
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
