import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuscarPageRoutingModule } from './buscar-routing.module';
import { BuscarPage } from './buscar.page';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [BuscarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BuscarPageModule { }
