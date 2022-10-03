import { Component, OnInit } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { UtilService } from '../../services/util.service';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./styles/login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
    public util: UtilService,
    private menuCtrl: MenuController,
    private authService: AuthenticationService
  ) {
    console.log('constructor Login');
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
    console.log('ngOnInit Login');
  }

  ionViewDidEnter() {
    console.log('Ingresa a Login');
    this.menuCtrl.enable(false, 'start');
    this.menuCtrl.enable(false, 'end');
    this.platform.ready().then(() => {
      console.log('Cierra SplashScreen 2');
      SplashScreen.hide();
    });
  }

  signin() {
    console.log('signin Login');
    if (this.util.validateEmail(this.email) && this.password !== '') {
      this.util.openLoader();
      this.authService.login(this.email, this.password).then(userData => {
        localStorage.setItem('user', JSON.stringify(userData));
        this.util.navigate('tabs/directorios', false);
        this.email = '';
        this.password = '';
      }).catch(err => {
        if (err) {
          this.util.presentToast(`${err}`, true, 'bottom', 2100);
        }

      }).then(el => this.util.closeLoading());
    } else {
      this.util.presentToast('Ingrese correo electrónico y contraseña', true, 'bottom', 2100);
    }
  }

  async forgotPassword() {
    const alert = await this.alertController.create({
      header: 'Restablecer Contraseña',
      backdropDismiss: false,
      cssClass: 'darkModeAwareAlert',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Introduce tu correo electrónico',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (userResult) => {
            console.log('Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: (userResult) => {
            const value = this.util.validateEmail(userResult.email);
            this.authService.forgotPassword(userResult.email);
            return value;
          }
        }
      ]
    });
    await alert.present();
  }


}
