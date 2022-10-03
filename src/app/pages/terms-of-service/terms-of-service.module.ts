import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TermsOfServicePage } from './terms-of-service.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: TermsOfServicePage,
      }
    ])
  ],
  declarations: [TermsOfServicePage],
  providers: [
  ]
})
export class TermsOfServicePageModule { }
