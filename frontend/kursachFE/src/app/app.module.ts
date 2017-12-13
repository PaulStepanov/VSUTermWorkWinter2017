import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './tables/app.tables';
import {Table} from "./table/table";
import {MatIconRegistry, MatIconModule, MatTableModule} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    Table
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
