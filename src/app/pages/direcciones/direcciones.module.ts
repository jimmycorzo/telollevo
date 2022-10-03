import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DireccionesPage } from './direcciones.page';
import { RouterModule } from '@angular/router';
import { DireccionesResolver } from './direcciones.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DireccionesPage,
        resolve: {
          data: DireccionesResolver
        }
      }
    ])
  ],
  declarations: [DireccionesPage],
  providers: [
    DireccionesResolver,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class DireccionesPageModule { }
