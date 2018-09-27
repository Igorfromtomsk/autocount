import {Injectable} from '@angular/core';
import {StaticDataSource} from './static.dataSource';
import {Record} from './record.model';
import {Observable} from 'rxjs';

@Injectable()
export class RecordsRepository {
  public records: Record[] = [];

  constructor(private source: StaticDataSource) {
    this.source.getRecords().subscribe(data => {
      this.records = data;
    });
  }

  private getRecordIndexById(id) {
    return this.records.indexOf(this.records.filter(item => item.id == id)[0]);
  }

  addRecord(record: Record) {
    return this.source.addRecord(record);
  }

  deleteRecord(id) {
    const index = this.getRecordIndexById(id);
    return Observable.of(this.records.splice(index));
  }

  editRecord(record: Record) {
    return Observable.of(Object.assign(this.records[this.getRecordIndexById(record.id)], record));
  }

  getRecordById(id) {
    return this.records.filter(item => item.id == id)[0];
  }
}
