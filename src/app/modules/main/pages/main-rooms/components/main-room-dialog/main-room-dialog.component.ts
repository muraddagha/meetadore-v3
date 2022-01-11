import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IRoomModel } from "../../models/room.model";

@Component({
  selector: "app-main-room-dialog",
  templateUrl: "./main-room-dialog.component.html",
  styleUrls: ["./main-room-dialog.component.scss"]
})
export class MainRoomDialogComponent implements OnInit {
  public roomDetail: IRoomModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialogRef<MainRoomDialogComponent>) {
    this.roomDetail = this.data;
  }

  ngOnInit(): void {}

  public closeModal(): void {
    this.dialog.close();
  }
}
