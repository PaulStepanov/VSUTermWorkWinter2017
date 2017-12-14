import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './tables/app.tables';
import {Table} from "./table/table";
import {
  MatIconModule, MatTableModule, MatGridListModule, MatDialog,
  MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {PropertyTable} from "./propertyTable/editTable";
import {EditTableNameDialog} from "./tables/editTableNamedialog/editTableNameDialog";
import {FormsModule} from "@angular/forms";
import {SaveTableNameDialog} from "./tables/addTableNameDialog/saveTableNameDialog";
import {EditTablePropertValueDialog} from "./table/editTablePropertyValueDialog/editTablePropertyValueDialog";
import {EditTablePropertyDefinitionDialog} from "./propertyTable/editTablePropertyDefinitionDialog/editTablePropertyDefinitionDialog";


@NgModule({
  declarations: [
    AppComponent,
    Table,
    PropertyTable,
    EditTableNameDialog,
    SaveTableNameDialog,
    EditTablePropertValueDialog,
    EditTablePropertyDefinitionDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [MatDialog, HttpClientModule],
  entryComponents:[EditTableNameDialog, SaveTableNameDialog, EditTablePropertValueDialog, EditTablePropertyDefinitionDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
