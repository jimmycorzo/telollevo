import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriasPage } from './categorias.page';
import { CategoriasPageRoutingModule } from './categorias-routing.module';
import { ComponentsModule } from 'app/components/components.module';
import { FirebaseService } from 'app/services/firebase.service';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IonicModule,
    FormsModule,
    CategoriasPageRoutingModule,
  ],
  declarations: [CategoriasPage],
  providers: [
    FirebaseService,
    // InAppBrowser
  ]
})
export class CategoriasPageModule { }
