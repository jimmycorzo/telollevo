import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CarritoPageRoutingModule } from './carrito-routing.module';
import { CarritoPage } from './carrito.page';
import { ComponentsModule } from 'app/components/components.module';
import { Routes } from '@angular/router';
import { FirebaseService } from '@app/services/Firebase.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

const carritoRoutes: Routes = [
  {
    path: '',
    component: CarritoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritoPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [CarritoPage, CurrencyPipe],
  providers: [
    FirebaseService,
    // InAppBrowser
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarritoPageModule { }
