import { ITable } from './../../interfaces/ITable';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _tables: BehaviorSubject<ITable[]> = new BehaviorSubject(Array());
  get tables() {
    return this._tables.asObservable();
  }
  total: Number = 0;
  constructor(private http: HttpClient) { }

  loadTables(params?): Observable<ITable[]> {
    return this.http.get('/tables', { params: params }).pipe(map((res: any) => {
      this.total = res.count;
      const tables = res.rows.map(x => x as ITable);
      this._tables.next(tables);
      return tables;
    }));
  }

  findByGuest(id: string): Observable<ITable> {
    return this.http.get('/tables/guest/' + id).pipe(map((res: any) => {
      return res as ITable;
    }));
  }

  create(table: ITable): Observable<ITable> {
    const body: any = Object.assign({}, table);
    body.seats = body.seats.map(x => x.id);
    body.checkedInSeats = body.checkedInSeats.map(x => x.id);
    return this.http.post('tables', body).pipe(map((res: any) => {
      return res as ITable;
    }));
  }
}
