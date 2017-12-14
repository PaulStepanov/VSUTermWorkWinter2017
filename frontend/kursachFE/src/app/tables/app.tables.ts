import {Component, OnInit} from '@angular/core';
import {MatDialog, MatIconRegistry} from "@angular/material";
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from  'rxjs';
import {TableClass} from "./classes/TableClass";
import {EditTableNameDialog} from "./editTableNamedialog/editTableNameDialog";
import {SaveTableNameDialog} from "./addTableNameDialog/saveTableNameDialog";
import {ajax} from 'rxjs/observable/dom/ajax';
import {serverURL} from "../constants/serverURL";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isEditingMode:boolean = false;
  updateSubject:Subject<boolean> = new Subject();
  tableName:string = "no table";//actual using table name using http
  tableId:number = 0;

  tables:Array<TableClass> = [new TableClass("no table")];//get via http


  public toggleEditingMode(){
    this.isEditingMode = !this.isEditingMode

  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog){
   iconRegistry
      .addSvgIcon(
      'edit-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-icon.svg'))
      .addSvgIcon('edit-pencil',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
  }

  openEditDialog(tableName:string): void {
    let dialogRef = this.dialog.open(EditTableNameDialog, {
      width: '400px',
      data: { tableName: tableName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The editTableNamedialog was closed');
    });
  }

  openSaveDoalog(){
    let dialogRef = this.dialog.open(SaveTableNameDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The saveTableNameDialog was closed');
    });
  }

  setTable(name:string){
    this.tableName = name;
  }

  finishEditing(){
    this.isEditingMode = false;
  }

  aClick(name:string, id:number){
    this.tableName = name;
    this.tableId = id;
    this.updateSubject.next(true)
  }


  ngOnInit(): void {
    this.tables = []

    ajax({
      url:serverURL+"entity_definition",
      method: 'get'
    }).subscribe(resp=>{

      if (resp.status == 200) {
        this.tables = []
        let tables = resp.response as Array<any>;

        tables.forEach(table=>{
          let tableClass = new TableClass(table.name, table.id);

          this.tables.push(tableClass)
        })
        console.log(this.tables);
      } else {
        console.log("error getting");
      }
    })
  }

}
