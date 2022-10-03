import { IonicModule } from '@ionic/angular';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { LinksPage } from './links.page';
import { LinksPageRoutingModule } from './links-routing.module';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '@app/services/Firebase.service';


const linksRoutes: Routes = [
  {
    path: '',
    component: LinksPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    LinksPageRoutingModule,
    ComponentsModule,
    FormsModule,
  ],
  declarations: [LinksPage],
  providers: [
    FirebaseService,
  ]
})
export class LinksPageModule { }
