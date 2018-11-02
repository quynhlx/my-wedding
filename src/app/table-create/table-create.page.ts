import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ITable } from '../interfaces/ITable';
import { TableService } from '../core/services/table.service';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.page.html',
  styleUrls: ['./table-create.page.scss'],
})
export class TableCreatePage implements OnInit {
  name: string;
  total: Number = 10;
  constructor(private modalCtrl: ModalController, private tableSvc: TableService) { }

  ngOnInit() {
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  create() {
    const newTable: ITable = {
      name: this.name,
      total: this.total,
      checkedInSeats: [],
      seats: []
    };
    this.tableSvc.create(newTable).subscribe(x => {
      this.modalCtrl.dismiss();
    });
  }

}
