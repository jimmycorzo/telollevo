import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductosPageRoutingModule } from './productos-routing.module';
import { ProductosPage } from './productos.page';
import { ComponentsModule } from 'app/components/components.module';
import { TarjetaPage } from '../tarjeta/tarjeta.page';
import { SwiperModule } from 'swiper/angular';
import { FirebaseService } from 'app/services/firebase.service';
// import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ProductosPageRoutingModule,
    SwiperModule
  ],
  declarations: [ProductosPage],
  providers: [
    FirebaseService,
    // CallNumber,
    // InAppBrowser
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductosPageModule { }
