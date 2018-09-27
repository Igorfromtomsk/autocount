import {Component, OnInit} from '@angular/core';
import {RecordsRepository} from '../model/records.repository';
import {Record} from '../model/record.model';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss']
})
export class RecordsListComponent implements OnInit {
  public records: Record[];
  public searchInProgress: boolean;
  private searchTimer;

  constructor(private repository: RecordsRepository) {
    this.records = this.repository.records;
    this.searchInProgress = false;
  }

  faEdit = faEdit;
  faTrash = faTrash;

  deleteRecord(id) {
    this.repository.deleteRecord(id).subscribe(data => {
      console.log('deleted ', data);
    });
  }

  search(name) {
    this.searchInProgress = true;

    if (this.searchTimer) {
      clearTimeout(this.searchTimer);
    }

    this.searchTimer = setTimeout(() => {
      if (!!name) {
        this.records = this.repository.records.filter(item => item.name === name);
      } else {
        this.records = this.repository.records;
      }

      this.searchInProgress = false;
    }, 1000); // one second delay
  }

  filter(type, target) {

    const isSorted = target.classList.contains('asc');

    target
      .parentElement
      .childNodes
      .forEach(th => {
        th.classList
          .remove('asc', 'desc');
      });

    switch (type) {
      case 'number':
        this.records.sort((a, b) => returnFilter(a.id > b.id));
        break;
      case 'name':
        this.records.sort((a, b) => returnFilter(a.name[0] > b.name[0]));
        break;
      case 'date':
        this.records.sort((a, b) => {
          const aTime = new Date(a.date).getTime(),
            bTime = new Date(b.date).getTime();

          return returnFilter(aTime > bTime);
        });
        break;
      case 'coast':
        this.records.sort((a, b) => returnFilter(a.coast > b.coast));
        break;
      case 'period':
        this.records.sort((a, b) => returnFilter(a.period > b.period));
        break;
    }

    if (isSorted) {
      this.records.reverse();
      target.classList.add('desc');
    } else {
      target.classList.add('asc');
    }

    function returnFilter(ex) {
      if (ex) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  ngOnInit() {
  }

}
