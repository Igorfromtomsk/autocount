import {Injectable} from '@angular/core';
import {StaticDataSource} from './static.dataSource';
import {Record} from './record.model';

@Injectable()
export class RecordsRepository {
  public records: Record[] = [];

  constructor(private source: StaticDataSource) {
    this.source.getRecords().subscribe(data => {
      this.records = data;
    });
  }

  addRecord(record) {
    return this.source.addRecord(record);
  }

  deleteRecord(id) {
    return this.source.deleteRecord(id);
  }
}
