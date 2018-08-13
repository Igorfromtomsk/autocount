import {Component, OnInit} from '@angular/core';
import {RecordsRepository} from '../counter/model/records.repository';
import {Record} from '../counter/model/record.model';
import {faCoffee, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss']
})
export class RecordsListComponent implements OnInit {

  constructor(private repository: RecordsRepository) {
  }

  faCoffee = faCoffee;
  faTrash = faTrash;

  get records(): Record[] {
    return this.repository.records;
  }

  deleteRecord(id) {
    this.repository.deleteRecord(id).subscribe(data => {
      console.log('deleted ', data);
    });
  }

  ngOnInit() {
  }

}
