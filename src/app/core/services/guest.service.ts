import { IGuest, IGuestGroup } from './../../interfaces/IGuest';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class GuestService {

  private _groups: BehaviorSubject<IGuestGroup[]> = new BehaviorSubject(Array());
  get groups() {
    return this._groups.asObservable();
  }
  guests: IGuest[] = [];
  total: Number = 0;
  constructor(private http: HttpClient) { }

  loadGuests(query?): Observable<IGuestGroup[]> {
    return this.http.get('/guests', { params: query }).pipe(map((res: any) => {
      this.total = res.count;
      this.guests = res.rows.map(x => x as IGuest);
      const groups = _.chain(this.guests).groupBy('group').toPairs().map(item => {
        return _.zipObject(['group', 'members'], item);
      }).value() as any;
      this._groups.next(groups);
      return groups;
    }));
  }

  search(keyword: String): IGuestGroup[] {
    if (!keyword) {
      const allgroups = _.chain(this.guests).groupBy('group').toPairs().map(item => {
        return _.zipObject(['group', 'members'], item);
      }).value() as any;
      this._groups.next(allgroups);
      return allgroups;
    }
    const guests = this.guests.filter(g => this.xoaDau(g.name.toLowerCase()).includes(this.xoaDau(keyword.toLowerCase())));
    const groups = _.chain(guests).groupBy('group').toPairs().map(item => {
      return _.zipObject(['group', 'members'], item);
    }).value() as any;
    this._groups.next(groups);
    return groups;
  }

  insert(guest: IGuest) {
    return this.http.post('/guests', guest).pipe(map((res: any) => {
      return res as IGuest;
    }), tap(x => {
      this.guests.push(guest);
    }));
  }

  getGuest(id): Observable<IGuest> {
    return this.http.get('/guests/' + id).pipe(map(res => res as IGuest));
  }

  private xoaDau(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    return str;
  }
}
