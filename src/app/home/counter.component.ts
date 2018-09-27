import {Component, OnInit} from '@angular/core';
import {RecordsRepository} from '../model/records.repository';
import {Record} from '../model/record.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public current_month = new Intl.DateTimeFormat('ru-RU', {month: 'long'}).format();
  public current_year = new Date().getFullYear();
  public amount = 0;
  public records: Record[];

  constructor(private repository: RecordsRepository) {
    this.records = this.repository.records.filter(item => {
      const monthsPast = (new Date().getFullYear() - new Date(item.date).getFullYear())
        * 11 + new Date().getMonth() - new Date(item.date).getMonth();

      if (monthsPast % item.period !== 0 ) {
        return false;
      } else {
        return true;
      }
    });
    this.records.sort((a, b) => {
      if (a.coast < b.coast) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  get sum(): number {
    this.amount = 0;

    this.records.forEach(item => {
      this.amount += item.coast;
    });

    return this.amount;
  }

  ngOnInit() {
  }

}
