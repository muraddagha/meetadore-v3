import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NotifierService } from "angular-notifier";
import { ConfrimDialogComponent } from "src/app/components/confrim-dialog/confrim-dialog.component";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { MainRoomAddUpdateDialogComponent } from "../../../main-rooms/components/main-room-add-update-dialog/main-room-add-update-dialog.component";
import { IMeetingParticipantModel } from "../../models/meeting-participant.model";
import { IMeetingUserFilterModel } from "../../models/meeting-user-filter.model";
import { IMeetingModel } from "../../models/meeting.model";
import { MainDetailService } from "../../services/main-detail.service";
import { MainMeetingsApiService } from "../../services/main-meetings-api.service";
import { MainMeetingsFormDialogComponent } from "../main-meetings-form-dialog/main-meetings-form-dialog.component";

@Component({
  selector: "app-main-meetings-participant-dialog",
  templateUrl: "./main-meetings-participant-dialog.component.html",
  styleUrls: ["./main-meetings-participant-dialog.component.scss"]
})
export class MainMeetingsParticipantDialogComponent implements OnInit {
  public participants: IMeetingParticipantModel[] = [];
  public meeting: IMeetingModel;
  public addParticipantAction: boolean = false;
  public meetingFilters: IMeetingUserFilterModel[];
  public form: FormGroup;
  public loader: boolean = true;
  constructor(
    private dialog: MatDialog,
    private mainMeetingsApiService: MainMeetingsApiService,
    private fb: FormBuilder,
    private notifier: NotifierService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MainMeetingsParticipantDialogComponent>,
    private mainDetailService:MainDetailService
  ) {
    this.meeting = this.data.meeting;
  }

  ngOnInit(): void {
    this.getParticipantList();
  }

  public closeModal(): void {
    this.dialogRef.close();
  }
  private generateForm(): void {
    this.form = this.fb.group({
      meetingId: this.meeting.id,
      userId: [, [Validators.required]]
    });
  }

  public getParticipantList(): void {
    this.mainMeetingsApiService.getParticipantList(this.meeting.id).subscribe(
      res => {
        this.participants = res;
      },
      err => {},
      () => {
        this.loader = false;
      }
    );
  }

  public openUpdateModal(): void {
    this.dialog
      .open(MainMeetingsFormDialogComponent, {
        data: {
          mode: DialogTypeEnum.Update,
          detail: this.meeting
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.mainDetailService.updateData.next(true)
        this.dialog.closeAll();
        // this.refreshRoomItemData.emit(this.roomItem);
      });
  }
  public removeMeeting(): void {
    this.dialog
      .open(ConfrimDialogComponent, {
        panelClass: "confrim-dialog",
        maxHeight: "400px",
        data: {
          action: this.mainMeetingsApiService.deleteMeeting(this.meeting.id),
          // message: "Görüş silindi"
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.mainDetailService.updateData.next(true)
      });
  }
  public removeParticipant(participant: IMeetingParticipantModel): void {
    if(this.meeting.meetingStatus=="OLD"||this.meeting.meetingStatus=="DECLINE") return;
    let requestData = {
      meetingId: this.meeting.id,
      userId: participant.userId
    };
    this.dialog
      .open(ConfrimDialogComponent, {
        panelClass: "confrim-dialog",
        maxHeight: "400px",
        data: {
          action: this.mainMeetingsApiService.deleteParticipant(requestData),
          message: "İştirakçı silindi"
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.getParticipantList();
      });
  }
  public addParticipant(): void {
    this.generateForm();
    this.addParticipantAction = true;
    this.mainMeetingsApiService.getUserListForFilter(this.meeting.id).subscribe(res => {
      this.meetingFilters = res;
    });
  }
  public submit(): void {
    if (this.form.invalid) return;
    this.mainMeetingsApiService.addParticipant(this.form.value).subscribe(() => {
      this.notifier.notify("success", "İştirakçı əlavə edildi");
      this.getParticipantList();
      this.form.reset();
    });
  }
}
