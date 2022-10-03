import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TarjetaPageRoutingModule } from './tarjeta-routing.module';

import { TarjetaPage } from './tarjeta.page';
import { ComponentsModule } from 'app/components/components.module';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: TarjetaPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetaPageRoutingModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    SwiperModule
  ],
  declarations: [TarjetaPage],
  // providers: [CallNumber, InAppBrowser]
})
export class TarjetaPageModule { }
