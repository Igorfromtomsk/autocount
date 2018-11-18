import {Injectable} from '@angular/core';
import {Record} from './record.model';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

@Injectable()
export class StaticDataSource {
  private records: Record[] = [
    {id: 0, name: 'Minecraft', date: '07-21-2018', period: 1, coast: 479},
    {id: 1, name: 'Tele2', date: '07-09-2018', period: 1, coast: 200},
    {id: 2, name: 'Skyeng', date: '07-01-2018', period: 1, coast: 4490},
    {id: 3, name: 'Таблетки', date: '07-21-2018', period: 1, coast: 1290},
    {id: 4, name: 'Spotify', date: '07-11-2018', period: 1, coast: 263},
    {id: 5, name: 'Playstation Network', date: '07-14-2018', period: 3, coast: 1599},
    {id: 6, name: 'Ключевая вода', date: '07-10-2018', period: 1, coast: 570},
    {id: 7, name: 'Internet', date: '07-17-2017', period: 1, coast: 540},
  ];

  counstructor() {
  }

  getRecords(): Observable<Record[]> {
    return Observable.from([this.records]);
  }

  addRecord(record) {
    if (!record.id) {
      record.id = Math.min.apply(null, this.records.map(item => item.id));
    }

    return Observable.of(this.records.push(record));
  }
}
