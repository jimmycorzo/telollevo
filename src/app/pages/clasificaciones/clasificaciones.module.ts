import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { ClasificacionesPage } from './clasificaciones.page';
import { ClasificacionesPageRoutingModule } from './clasificaciones-routing.module';
import { FirebaseService } from 'app/services/firebase.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

const clasificacionesRoutes: Routes = [
  {
    path: '',
    component: ClasificacionesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ClasificacionesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ClasificacionesPage],
  providers: [
    FirebaseService,
    // InAppBrowser
  ]
})
export class ClasificacionesPageModule { }
