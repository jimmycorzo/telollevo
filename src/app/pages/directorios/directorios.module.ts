import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DirectoriosPageRoutingModule } from './directorios-routing.module';
import { DirectoriosPage } from './directorios.page';
import { ComponentsModule } from 'app/components/components.module';
import { TarjetaPage } from '../tarjeta/tarjeta.page';
import { SwiperModule } from 'swiper/angular';
import { FirebaseService } from 'app/services/firebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoriosPageRoutingModule,
    ComponentsModule,
    SwiperModule
  ],
  declarations: [DirectoriosPage, TarjetaPage],
  providers: [
    FirebaseService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectoriosPageModule { }
