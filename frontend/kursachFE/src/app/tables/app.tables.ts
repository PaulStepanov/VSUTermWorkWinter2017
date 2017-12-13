import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'edit-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/edit-icon.svg'));
  }
}
