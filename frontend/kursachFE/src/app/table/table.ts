import {Component, Input, OnInit} from "@angular/core";
import {MatTableDataSource} from '@angular/material';
import {Observable} from  'rxjs';
import {addEditFieldToDataSource} from "./addEditFieldToDataSource";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class Table implements OnInit{
  private isEdit:boolean = false;

  @Input()
  private tableName:string;

  @Input()
  private isEditObserver:Observable<boolean>;

  private element_data = [ //using http
    {id:2, name: "n1"},
    {id:1, name: "n2"},
    {id:3, name: "n3"},
    {id:4, name: "n4"}]

  private userColumns = ['id', 'name'] //столбцы полученные с базы данных

  private displayedColumns:Array<string> = this.userColumns.concat("edit")//using http and complicated function

  private dataSource:MatTableDataSource<any> = addEditFieldToDataSource(this.element_data)



  constructor(){

  }

  getEditDisplayStype(){
    return this.isEdit?"flex":"none"
  }

  ngOnInit(): void {

    this.isEditObserver.subscribe(val=>{
      this.isEdit = val
    })
  }
}
