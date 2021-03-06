import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablePage } from './table.page';
import { SharedModule } from '../components/shared.module';
import { TableCreatePageModule } from '../table-create/table-create.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TableCreatePageModule,
    RouterModule.forChild([
      { path: '', component: TablePage }
    ])
  ],
  declarations: [TablePage]
})
export class TablePageModule {}
