import { Component } from '@angular/core';
import {MatDialog, MatIconRegistry} from "@angular/material";
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from  'rxjs';
import {TableClass} from "./classes/TableClass";
import {EditTableNameDialog} from "./editTableNamedialog/editTableNameDialog";
import {SaveTableNameDialog} from "./addTableNameDialog/saveTableNameDialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isEditingMode:boolean = false;
  isEditSubject:Subject<boolean> = new Subject();
  tableName:string = "aaa";//actual using table name using http

  tables:Array<TableClass> = [new TableClass("aaa"),new TableClass("bbb")];//get via http


  public toggleEditingMode(){
    this.isEditingMode = !this.isEditingMode
    this.isEditSubject.next(this.isEditingMode)
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

}
