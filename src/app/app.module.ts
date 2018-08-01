import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import {StaticDataSource} from './counter/model/static.dataSource';
import {RecordsRepository} from './counter/model/records.repository';
import { RecordsListComponent } from './records-list/records-list.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AddRecordComponent } from './add-record/add-record.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    RecordsListComponent,
    AddRecordComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: CounterComponent},
      {path: 'records-list', component: RecordsListComponent},
      {path: 'add-record', component: AddRecordComponent}
    ])
  ],
  providers: [StaticDataSource, RecordsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
