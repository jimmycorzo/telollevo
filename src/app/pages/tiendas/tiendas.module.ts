import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TiendasPage } from './tiendas.page';
import { TiendasPageRoutingModule } from './tiendas-routing.module';
import { FirebaseService } from 'app/services/firebase.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

const tiendasRoutes: Routes = [
  {
    path: '',
    component: TiendasPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TiendasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TiendasPage],
  providers: [
    FirebaseService,
    // InAppBrowser
  ]
})
export class TiendasPageModule { }
