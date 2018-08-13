import {Component, OnInit} from '@angular/core';
import {RecordsRepository} from './model/records.repository';
import {Record} from './model/record.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public current_month = new Intl.DateTimeFormat('ru-RU', {month: 'long'}).format();
  public current_year = new Date().getFullYear();
  public amount = 0;

  constructor(private repository: RecordsRepository) {
  }

  get records(): Record[] {
    return this.repository.records;
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
