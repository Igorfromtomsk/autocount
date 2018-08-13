import { Component, OnInit } from '@angular/core';
import {RecordsRepository} from '../counter/model/records.repository';
import {Record} from '../counter/model/record.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  public record: Record = {
    name: '',
    date: '',
    period: 0,
    coast: 0
  };

  constructor( private repository: RecordsRepository, private router: Router) { }

  ngOnInit() {
  }

  addRecord() {
    this.repository.addRecord(this.record).subscribe(data => {
      if (data) {
        this.router.navigateByUrl('/records-list');
      }
    });
  }
}
