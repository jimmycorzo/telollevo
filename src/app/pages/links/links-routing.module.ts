import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksPage } from './links.page';

const routes: Routes = [
    {
        path: '',
        component: LinksPage,
    }
];

// const routes: Routes = [
//     {
//         path: '',
//         component: LinksPage,
//         children: [
//             {
//                 path: 'tab1',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../links/tab1.module#Tab1PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: 'tab2',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../links/tab2.module#Tab2PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: 'tab3',
//                 children: [
//                     {
//                         path: '',
//                         loadChildren: '../links/tab3.module#Tab3PageModule'
//                     }
//                 ]
//             },
//             {
//                 path: '',
//                 redirectTo: '/links/tab1',
//                 pathMatch: 'full'
//             }
//         ]
//     },
//     {
//         path: '',
//         redirectTo: '/links/tab1',
//         pathMatch: 'full'
//     }
// ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LinksPageRoutingModule { }
