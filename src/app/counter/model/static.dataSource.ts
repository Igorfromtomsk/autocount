import {Injectable} from '@angular/core';
import {Record} from './record.model';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

@Injectable()
export class StaticDataSource {
  private records: Record[] = [
    {id: 1, name: 'Minecraft', date: '21-07-2018', period: 1, coast: 479},
    {id: 2, name: 'Tele2', date: '09-07-2018', period: 1, coast: 200},
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

  deleteRecord(id) {
    return Observable.of(
      this.records.splice(
        this.records.indexOf(
          this.records.filter(item => item.id === id)[0]
        )
      )
    );
  }
}
