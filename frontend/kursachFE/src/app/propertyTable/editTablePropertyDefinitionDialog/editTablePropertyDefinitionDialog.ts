import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {propDefFields} from "../../constants/propDefFields";

@Component({
  selector: 'edit-table-property-definition-dialog',
  templateUrl: 'editTablePropertyDefinitionDealog.html',
})
export class EditTablePropertyDefinitionDialog {
  constructor(public dialogRef: MatDialogRef<EditTablePropertyDefinitionDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  private tableName:string  = this.data.tableName;

  private tablePropDefName:string = this.data.tablePropDefName;//copy
  private tablePropDefType:number = this.data.tablePropDefType;//copy


  private propDefFields = propDefFields
  onSaveClick(): void {

    this.dialogRef.close();
  }

  onDeleteClick(): void {
    this.dialogRef.close();
  }
}
