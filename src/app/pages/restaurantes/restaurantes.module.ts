import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { RestaurantesPage } from 'app/pages/restaurantes/restaurantes.page';
import { RestaurantesPageRoutingModule } from './restaurantes-routing.module';
import { FirebaseService } from 'app/services/firebase.service';
import { FormsModule } from '@angular/forms';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

const restaurantesRoutes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RestaurantesPageRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [RestaurantesPage],
  providers: [
    FirebaseService,
    // InAppBrowser
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RestaurantesPageModule { }
