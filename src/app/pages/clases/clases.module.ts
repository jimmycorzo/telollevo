import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { ClasesPage } from 'app/pages/clases/clases.page';
import { ClasesPageRoutingModule } from './clases-routing.module';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from 'app/services/firebase.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

const clasesRoutes: Routes = [
  {
    path: '',
    component: ClasesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ClasesPageRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [ClasesPage, CurrencyPipe],
  providers: [
    FirebaseService,
    // InAppBrowser
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClasesPageModule { }
