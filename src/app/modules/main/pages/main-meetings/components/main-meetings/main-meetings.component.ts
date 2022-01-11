import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IUserAccountModel } from "src/app/components/layout/models/user-account.model";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { AuthService } from "src/app/shared/services/auth.service";
import { MainMeetingsFormDialogComponent } from "../main-meetings-form-dialog/main-meetings-form-dialog.component";

@Component({
  selector: "app-main-meetings",
  templateUrl: "./main-meetings.component.html",
  styleUrls: ["./main-meetings.component.scss"]
})
export class MainMeetingsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openAddModal(): void {
    this.dialog.open(MainMeetingsFormDialogComponent, {
      panelClass: "details-dialog",
      data: {
        mode: DialogTypeEnum.Create,
        // updateEvent:
      }
    });
  }
}
