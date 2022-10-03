import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetallesPageRoutingModule } from './detalles-routing.module';
import { DetallesPage } from './detalles.page';
import { ComponentsModule } from 'app/components/components.module';
import { SwiperModule } from 'swiper/angular';

const routes: Routes = [
  {
    path: '',
    component: DetallesPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPageRoutingModule,
    ComponentsModule,
    SwiperModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DetallesPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetallesPageModule { }
