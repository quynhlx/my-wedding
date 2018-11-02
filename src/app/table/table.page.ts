import { TableService } from './../core/services/table.service';
import { ITable } from './../interfaces/ITable';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TableCreatePage } from '../table-create/table-create.page';

@Component({
  selector: 'app-table-page',
  templateUrl: 'table.page.html',
  styleUrls: ['table.page.scss']
})
export class TablePage implements OnInit {
  tables: Observable<ITable[]>;

  constructor(private tableSvc: TableService,
    public modalController: ModalController) {
  }

  ngOnInit() {
    this.tables = this.tableSvc.tables;
    this.tableSvc.loadTables().subscribe();
  }

  async add() {
    const modal = await this.modalController.create({
      component: TableCreatePage,
    });
    return await modal.present();
  }

}
