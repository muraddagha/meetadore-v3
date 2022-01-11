import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NotifierService } from "angular-notifier";
import { SupportApiService } from "src/app/modules/support/services/support-api.service";

@Component({
  selector: "app-confrim-dialog",
  templateUrl: "./confrim-dialog.component.html",
  styleUrls: ["./confrim-dialog.component.scss"]
})
export class ConfrimDialogComponent implements OnInit {
  private id: string;
  private notifierMessage = "Otaq silindi";
  constructor(private dialogRef: MatDialogRef<ConfrimDialogComponent>, private notifier: NotifierService, @Inject(MAT_DIALOG_DATA) public data: any,private dialog:MatDialog) {
    this.id = data.id;
    this.notifierMessage = data.message;
  }

  ngOnInit(): void {}

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public removeSurvey() {
    this.data.action.subscribe(() => {
      this.dialog.closeAll();
      // this.notifier.notify("error", this.notifierMessage);
    });
  }
}
