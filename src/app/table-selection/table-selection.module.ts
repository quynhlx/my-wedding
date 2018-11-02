import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TableSelectionPage } from './table-selection.page';
import { SharedModule } from '../components/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TableSelectionPage
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
  declarations: [TableSelectionPage]
})
export class TableSelectionPageModule {}
