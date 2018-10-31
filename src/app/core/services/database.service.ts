import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class DatabaseService {

  private options: any = {
    name: 'imarry',
    location: 'default',
    createFromLocation: 1
  };

  public db: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.connectToDb();
  }

  private connectToDb(): void {
    this.sqlite.create(this.options)
      .then((db: SQLiteObject) => {

        this.db = db;
        const sql = `CREATE TABLE 'guest' ( 'id' INTEGER, 'name' TEXT,
        'phoneNumber' TEXT, 'status' INTEGER, 'avatar' TEXT,
        'address' TEXT, PRIMARY KEY('id') )`;
        this.db.executeSql(sql)
          .then(() => `Executed SQL ${sql}`)
          .catch(e => `Error: ${JSON.stringify(e)}`);
      })
      .catch(e => JSON.stringify(e));
  }
}
