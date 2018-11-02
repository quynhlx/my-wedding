import { ITable } from './../interfaces/ITable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-page',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss']
})
export class TablePage implements OnInit {
  tables: ITable[];

  constructor() {
  }

  ngOnInit() {
    this.tables = [
      {
        name: '01 - Janeto'
      },
      {
        name: '02 - Beldecor'
      },
      {
        name: 'Gia đình'
      },
      {
        name: 'Bạn Thân'
      },
      {
        name: 'Bạn chú rể'
      },
      {
        name: 'Bạn cô dâu'
      },
      {
        name: 'Đồng nghiệp'
      }
    ];
  }

}
