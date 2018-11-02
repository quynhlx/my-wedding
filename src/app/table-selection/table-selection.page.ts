import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../core/services/table.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.page.html',
  styleUrls: ['./table-selection.page.scss'],
})
export class TableSelectionPage implements OnInit, OnDestroy {
  tables: Observable<ITable[]>;
  selected: ITable;
  guestId: string;
  constructor(private tableSvc: TableService, private route: ActivatedRoute, private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.guestId = this.route.snapshot.params.id;
    this.tables = this.tableSvc.tables;
    this.tableSvc.loadTables().subscribe();
  }

  select(table: ITable) {
    if (this.selected === table) {
      this.selected = undefined;
      return;
    }
    this.selected = table;
  }

  ngOnDestroy() {
    this.selected = undefined;
  }

  addTable() {
    this.tableSvc.addGuestToTable(this.guestId, this.selected).subscribe(t => this.location.back());
  }
}
