import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';


@NgModule({
  imports: [CommonModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [],
})
export class SharedModule { }
