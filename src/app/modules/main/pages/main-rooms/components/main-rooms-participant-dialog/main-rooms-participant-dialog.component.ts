import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NotifierService } from "angular-notifier";
import { ConfrimDialogComponent } from "src/app/components/confrim-dialog/confrim-dialog.component";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { MainDetailService } from "../../../main-meetings/services/main-detail.service";
import { IParticipantModel } from "../../models/participant.model";
import { IRoomFilterModel } from "../../models/room-filter.model";
import { IRoomModel } from "../../models/room.model";
import { MainRoomsApiService } from "../../services/main-rooms-api.service";
import { MainRoomAddUpdateDialogComponent } from "../main-room-add-update-dialog/main-room-add-update-dialog.component";

@Component({
  selector: "app-main-rooms-participant-dialog",
  templateUrl: "./main-rooms-participant-dialog.component.html",
  styleUrls: ["./main-rooms-participant-dialog.component.scss"]
})
export class MainRoomsParticipantDialogComponent implements OnInit {
  public participants: IParticipantModel[] = [];
  public roomItem: IRoomModel;
  @Output() refreshRoomItemData = new EventEmitter();
  @Output() refreshRoomData = new EventEmitter();
  public addParticipantAction: boolean = false;
  public roomFilters: IRoomFilterModel[];
  public form: FormGroup;
  constructor(
    private dialog: MatDialog,
    private mainRoomsApiService: MainRoomsApiService,
    private fb: FormBuilder,
    private notifier: NotifierService,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MainRoomsParticipantDialogComponent>,private mainDetailService:MainDetailService
  ) {
    this.roomItem=data.roomItem
  }

  ngOnInit(): void {
    this.getParticipants();
  }

  public closeParticipantDetail(): void {
    this.dialogRef.close();
  }
  private generateForm(): void {
    this.form = this.fb.group({
      confranceRoomId: this.roomItem.id,
      userId: [, [Validators.required]]
    });
  }

  public getParticipants():void{
    this.mainRoomsApiService.getConferenceRoomParticipantList(this.data.id).subscribe(
      res => {
        this.participants = res;
      },
      err => {},
      () => {
       
      }
    );
  }

  public openUpdateModal(): void {
    this.dialog
      .open(MainRoomAddUpdateDialogComponent, {
        data: {
          mode: DialogTypeEnum.Update,
          detail: this.roomItem
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.mainDetailService.updateData.next(true)
        this.dialog.closeAll();
      });
  }
  public removeRoom(): void {
    this.dialog
      .open(ConfrimDialogComponent, {
        panelClass: "confrim-dialog",
        maxHeight: "400px",
        data: {
          id: this.roomItem.id,
          action: this.mainRoomsApiService.removeConferenceRoom(this.roomItem.id)
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.mainDetailService.updateData.next(true)
      });
  }
  public removeParticipant(participant: IParticipantModel): void {
    let requestData = {
      confranceRoomId: this.roomItem.id,
      userId: participant.userId
    };
    this.dialog
      .open(ConfrimDialogComponent, {
        panelClass: "confrim-dialog",
        maxHeight: "400px",
        data: {
          action: this.mainRoomsApiService.deleteConferenceRoomParticipant(requestData),
          message: "İştirakçı silindi"
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.mainDetailService.updateData.next(true)
        this.getParticipants();
      });
  }
  public addParticipant(): void {
    this.generateForm();
    this.addParticipantAction = true;
    this.mainRoomsApiService.getUserListForConferenceRoomFilter(this.roomItem.id).subscribe(res => {
      this.roomFilters = res;
    });
  }
  public submit(): void {
    if (this.form.invalid) return;
    this.mainRoomsApiService.addConferenceRoomParticipant(this.form.value).subscribe(() => {
      this.notifier.notify("success", "İştirakçı əlavə edildi");
      this.mainDetailService.updateData.next(true)
      this.getParticipants();
    });
  }
}
