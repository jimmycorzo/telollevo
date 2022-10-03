import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmacionPageRoutingModule } from './confirmacion-routing.module';
import { ConfirmacionPage } from './confirmacion.page';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfirmacionPage]
})
export class ConfirmacionPageModule { }
