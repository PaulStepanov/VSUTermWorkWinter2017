import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from '@angular/platform-browser';
import {Subject} from  'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isEditSubject:Subject<boolean> = new Subject();
  tableName:string = "aaa";//actual using table name using http

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    //Todo separate it to 
    iconRegistry.addSvgIcon(
      'edit-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-icon.svg'));
  }
}
