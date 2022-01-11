import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IMeetingModel } from "../../models/meeting.model";
import { MainDetailService } from "../../services/main-detail.service";
import { MainMeetingsParticipantDialogComponent } from "../main-meetings-participant-dialog/main-meetings-participant-dialog.component";

@Component({
  selector: "app-main-meetings-item",
  templateUrl: "./main-meetings-item.component.html",
  styleUrls: ["./main-meetings-item.component.scss"]
})
export class MainMeetingsItemComponent implements OnInit {
  @Input() meeting: IMeetingModel;
  constructor(private dialog: MatDialog,private mainDetailService:MainDetailService) {
    
  }

  ngOnInit(): void {}

  public openDetails(): void {
    this.dialog.open(MainMeetingsParticipantDialogComponent, {
      panelClass: "details-dialog",
      data: {
        meeting:this.meeting
      }
    });
  }
}
