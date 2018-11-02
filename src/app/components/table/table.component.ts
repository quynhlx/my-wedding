import { Component, OnInit, Input } from '@angular/core';
import { ITable } from '../../interfaces/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table?: ITable;
  seats = [[1, 6], [2, 7], [3, 8], [4, 9], [5, 10]];
  constructor() { }

  ngOnInit() {
    this.setAvailableSeat(9);
    this.setArrivedSeat(6);
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
