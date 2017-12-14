import {Component, Input, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from '@angular/material';
import {addEditFieldToDataSource} from "./addEditFieldToDataSource";
import {EditTablePropertValueDialog} from "./editTablePropertyValueDialog/editTablePropertyValueDialog";

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class Table implements OnInit{
  @Input()
  private tableName:string;


  private element_data = [ //using http
    {id:2, name: "n1"},
    {id:1, name: "n2"},
    {id:3, name: "n3"},
    {id:4, name: "n4"}]

  private userColumns = ['id', 'name'] //столбцы полученные с базы данных

  private displayedColumns:Array<string> = this.userColumns.concat("edit")//using http and complicated function

  private dataSource:MatTableDataSource<any> = addEditFieldToDataSource(this.element_data)



  constructor(public dialog: MatDialog){

  }

  openEditDialog(tableName:string,element ): void {
    let dialogRef = this.dialog.open(EditTablePropertValueDialog, {
      width: '400px',
      data: { tableName: tableName,  elementDataObj:element, fields:this.userColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The editTableNamedialog was closed');
    });
  }

  ngOnInit(): void {


  }
}
