import {Component, Input, OnInit} from "@angular/core";
import {MatDialog, MatTableDataSource} from '@angular/material';
import {addEditFieldToDataSource} from "./addEditFieldToDataSource";
import {EditTablePropertValueDialog} from "./editTablePropertyValueDialog/editTablePropertyValueDialog";
import {HttpClient} from "@angular/common/http";
import {ajax} from 'rxjs/observable/dom/ajax';
import {serverURL} from "../constants/serverURL";
import deepcopy from "ts-deepcopy";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-table',
  templateUrl: './table.html',
  styleUrls: ['./table.css']
})
export class Table implements OnInit{
  @Input()
  private tableName:string;

  @Input()
  private tableId:number;

  @Input()
  private editObserver:Observable<boolean>;

  private element_data = [
    {id:2, name: "n1"},
    {id:1, name: "n2"},
    {id:3, name: "n3"},
    {id:4, name: "n4"}//using http
  ]

  private userColumns = ["id","name"] //столбцы полученные с базы данных

  private displayedColumns:Array<string> = this.userColumns.concat("edit")//using http and complicated function

  private dataSource:MatTableDataSource<any> = addEditFieldToDataSource(this.element_data)



  constructor(public dialog: MatDialog, private http: HttpClient){

  }

  openEditDialog(tableName:string,element ): void {
    let dialogRef = this.dialog.open(EditTablePropertValueDialog, {
      width: '400px',
      data: { tableName: tableName,  elementDataObj:element, fields:this.userColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.updateData();
      console.log('The editTableNamedialog was closed');
    });
  }

  ngOnInit(): void {
    //this.updateData();
    this.editObserver.subscribe(_=>{
      //this.updateData()
    })

  }

  private updateData(){
    console.log("updating table");

    if (!(this.tableName && this.tableName!=="no table")){
      return
    }

    ajax({
      url:serverURL+`property_definition/tableName/${this.tableName}`,
      method: 'get'
    }).subscribe(resp=>{
      console.log(resp);
      if (resp.status == 200) {
        let columns = resp.response as Array<any>;
        this.userColumns = []
        this.element_data = []

        columns.forEach(col=>{
          this.userColumns.push(col.name)
        })

        this.getRowsIdByTableId(this.tableId).then(idArr=>{
          idArr.forEach(entityDefID => {
            this.getRowByEntityDefinitionId(entityDefID).then(row =>{

              let ceilArr  = row as Array<any>;

              let elemData = {}

              let promecies = []

               Observable.of(ceilArr).map(ceil=>{
                return new Promise(resolve => {
                  if (ceil['propertyId'] && ceil['name']) {
                    this.getPropNameById(ceil['propertyId']).then(colName=>{
                      Object.defineProperty(elemData, colName, {value: ceil['name'], enumerable:true })
                      resolve()
                    })
                  }
                })
              }).toArray().subscribe(arr=>{
                 Promise.all(promecies).then(_=>{
                   this.element_data.push(elemData)
                 })
               });



            })
          })
        })



        this.displayedColumns = deepcopy(this.userColumns)
        this.displayedColumns.push('edit')


        console.log(this.displayedColumns);
      } else {
        console.log("bad request");
      }
    })

  }

  private getPropNameById(propId:number):Promise<string>{
    return new Promise((resolve, reject) => {
      ajax({
        url:serverURL+`property_definition/id/${propId}`,
        method: 'get'
      }).subscribe(resp=> {
        if (resp.status == 200) {
          let propDefObj = resp.response;
          resolve(propDefObj.name)
        }
      })
    })

  }

  private getRowsIdByTableId(id:number):Promise<Array<number>>{
    return new Promise((resolve, reject) => {
      let retArr:Array<any> = []
      ajax({
        url:serverURL+`entity_value/entity_id/${id}`,
        method: 'get'
      }).subscribe(resp=> {
        if (resp.status == 200) {
          let propertyValues = resp.response as Array<any>;

          propertyValues.forEach(propVal=>{
            retArr.push(propVal.id)
          })
          resolve(retArr)
        }
      })
    })
  }

  private getRowByEntityDefinitionId(entityValId:number):Promise<Array<any>>{
    return new Promise((resolve, reject) => {
      let retArr:Array<any> = []
      ajax({
        url:serverURL+`property_value/entity_id/${entityValId}`,
        method: 'get'
      }).subscribe(resp=> {
        if (resp.status == 200) {
          let propertyValues = resp.response as Array<any>;

          propertyValues.forEach(propVal=>{
            retArr.push(propVal)
          })
          resolve(retArr)
        }
      })
    })

  }
}
