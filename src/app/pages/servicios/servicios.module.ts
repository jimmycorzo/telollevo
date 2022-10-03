import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ServiciosPageRoutingModule } from './servicios-routing.module';
import { ServiciosPage } from './servicios.page';
import { ComponentsModule } from 'app/components/components.module';
import { FirebaseService } from 'app/services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ServiciosPage],
  providers: [
    FirebaseService,
  ]

})
export class ServiciosPageModule { }
