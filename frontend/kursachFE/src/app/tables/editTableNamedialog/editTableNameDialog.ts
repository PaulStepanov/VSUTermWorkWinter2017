import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'edit-table-name-dialog',
  templateUrl: 'editTableNameDialog.html',
})
export class EditTableNameDialog {
  constructor(public dialogRef: MatDialogRef<EditTableNameDialog>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  private tableName:string  = this.data.tableName;

  onDeleClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close();
  }
}
