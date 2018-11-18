import {Component, OnInit} from '@angular/core';
import {RecordsRepository} from '../model/records.repository';
import {Record} from '../model/record.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})
export class AddRecordComponent implements OnInit {
  public record: Record = {
    name: '',
    date: new Date().toLocaleString('en').split(',')[0],
    period: 1,
    coast: 0
  };
  private editing: boolean;

  constructor(private repository: RecordsRepository, private router: Router, private activeAouter: ActivatedRoute) {
    this.editing = activeAouter.snapshot.params['mode'] === 'edit';
    const id = activeAouter.snapshot.params['id'];

    if (id != null) {
      Object.assign(this.record, this.repository.getRecordById(id) || new Record());
    }
  }

  ngOnInit() {
  }

  addRecord() {
    if (this.editing) {
      this.repository.editRecord(this.record).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/records-list');
        }
      });
    } else {
      this.repository.addRecord(this.record).subscribe(data => {
        if (data) {
          this.router.navigateByUrl('/records-list');
        }
      });
    }
  }
}
