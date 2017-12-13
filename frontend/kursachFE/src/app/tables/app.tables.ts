import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from  'rxjs';
import {TableClass} from "./classes/TableClass";

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    //Todo separate it to separate file, haha i'm kidding, life is fast-flowing
    iconRegistry
      .addSvgIcon(
      'edit-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-icon.svg'))
      .addSvgIcon('edit-pencil',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-pencil.svg'))
  }

}
