import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ITable } from '../../interfaces/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() table?: ITable;
  seats = [[1, 6], [2, 7], [3, 8], [4, 9], [5, 10]];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.table) {
      return;
    }
    this.setAvailableSeat(this.table.seats ? this.table.seats.length : 0);
    this.setArrivedSeat(this.table.checkedInSeats ? this.table.checkedInSeats.length : 0);
  }

  setArrivedSeat(total: number) {
    this.seats = this.seats.map(x => x.map(i => {
      if (i > total && i > 0) {
        return 0;
      }
      return i;
    }));
  }

  setAvailableSeat(total: number) {
    this.seats = this.seats.map(x => x.map(i => {
      if (i > total) {
        return -1;
      }
      return i;
    }));
  }

}
