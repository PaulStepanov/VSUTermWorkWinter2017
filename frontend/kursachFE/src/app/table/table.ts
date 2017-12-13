import {Component} from "@angular/core";
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class Table {
  element_data = [{id:2},{id:1},{id:3},{id:4}]
  displayedColumns = ['id']
  dataSource = new MatTableDataSource(this.element_data)


}
