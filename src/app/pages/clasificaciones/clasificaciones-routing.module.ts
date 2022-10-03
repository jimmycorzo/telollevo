import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoriosPage } from '../directorios/directorios.page';

import { ClasificacionesPage } from './clasificaciones.page';

const routes: Routes = [
    {
        path: '',
        component: ClasificacionesPage,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClasificacionesPageRoutingModule { }
