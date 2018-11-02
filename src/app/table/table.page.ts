import { TableService } from './../core/services/table.service';
import { ITable } from './../interfaces/ITable';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table-page',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss']
})
export class TablePage implements OnInit {
  tables: Observable<ITable[]>;

  constructor(private tableSvc: TableService) {
  }

  ngOnInit() {
    this.tables = this.tableSvc.tables;
    this.tableSvc.loadTables().subscribe();
  }

}
