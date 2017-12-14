import {Component, Input, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from '@angular/material';
import {EditTablePropertyDefinitionDialog} from "./editTablePropertyDefinitionDialog/editTablePropertyDefinitionDialog";
import deepcopy from "ts-deepcopy";
import {propDefFields} from "../constants/propDefFields";

@Component({
  selector: 'app-edit-table',
  templateUrl: './edittable.html',
  styleUrls: ['./ediTable.css']
})
export class PropertyTable implements OnInit{
  @Input()
  private tableName:string;


  private element_data = [ //using http
    {name:"x", type: 1},
    {name:"y", type: 2},
    {name:"n", type: 3}]


  private displayedColumns:Array<string> = ['name', 'type', 'edit']//using http and complicated function

  private dataSource:MatTableDataSource<any> = new MatTableDataSource(this.element_data)
  private propDefFields


  constructor(public dialog: MatDialog){

  }

  openEditDialog(tableName:string,element ): void {
    let dialogRef = this.dialog.open(EditTablePropertyDefinitionDialog, {
      width: '400px',
      data: { tableName: tableName,  tablePropDefName:element.name, tablePropDefType:element.type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The editTableNamedialog was closed');
    });
  }

  ngOnInit(): void {
    this.propDefFields = propDefFields

  }

  private mapTypeToString(type:number){
   let deepArrType = deepcopy(this.propDefFields);
    for (let tp of deepArrType) {
      if ( tp.value == type ) {
        return tp.viewValue
      }
    }
    return "Invalid param"
  }
}
