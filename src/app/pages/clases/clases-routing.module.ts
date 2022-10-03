import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesPage } from './clases.page';

const routes: Routes = [
    {
        path: '',
        component: ClasesPage,
    }
];

// const routes: Routes = [
//     {
//         path: '',
//         component: ClasesPage,
//         children: [
//             {
//                 path: 'tab1',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../clases/tab1.module#Tab1PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: 'tab2',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../clases/tab2.module#Tab2PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: 'tab3',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../clases/tab3.module#Tab3PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: '',
//                 redirectTo: '/clases/tab1',
//                 pathMatch: 'full'
//             }
//         ]
//     },
//     {
//         path: '',
//         redirectTo: '/clases/tab1',
//         pathMatch: 'full'
//     }
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClasesPageRoutingModule { }
