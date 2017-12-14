import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import deepcopy from "ts-deepcopy";

@Component({
  selector: 'edit-table-property-value-dialog',
  templateUrl: 'editTablePropertyValueDialog.html',
})
export class EditTablePropertValueDialog {
  constructor(public dialogRef: MatDialogRef<EditTablePropertValueDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  private tableName:string  = this.data.tableName;

  private fields:Array<string> = this.data.fields
  private elementDataObj = deepcopy(this.data.elementDataObj)

  private elementDataObjChanged = deepcopy(this.elementDataObj)//add copy

  onSaveClick(): void {
    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.dialogRef.close();
  }

  /**
   * @desc находид различия между параметрами и возвращает значения из elementObjChanged в виде полей обьекта, что б потом удчно отправить на сервер и обрадоваться
   * @param elementObj
   * @param elementObjChanged
   */
  private findDiff(elementObj,elementObjChanged){
    
  }
}
