import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'save-table-name-dialog',
  templateUrl: 'saveTableNameDialog.html',
})
export class SaveTableNameDialog {
  constructor(public dialogRef: MatDialogRef<SaveTableNameDialog>,
              ) {
  }


  onSaveClick(): void {
    this.dialogRef.close();
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
