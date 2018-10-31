import { IGuest } from './../../interfaces/IGuest';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
@Injectable({
  providedIn: 'root'
})
export class GuestService {
  guests: IGuest[] = [];
  constructor(private database: DatabaseService) { }

  insert(guest: IGuest) {
    const sql = `INSERT INTO guest (
      name,
      phoneNumber,
      status,
      avatar,
      address) VALUES (
        ${guest.name},
        ${guest.phoneNumber},
        ${guest.status},
        ${guest.avatar},
        ${guest.address},
      )
    `;
    this.database.db.executeSql(sql).then(() => {
      this.guests.push(guest);
    });
  }
}
