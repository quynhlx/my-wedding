import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuestProfilePage } from './guest-profile.page';
import { SharedModule } from '../components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: GuestProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuestProfilePage]
})
export class GuestProfilePageModule {}
