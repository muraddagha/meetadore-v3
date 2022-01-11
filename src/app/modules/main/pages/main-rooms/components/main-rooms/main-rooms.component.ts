import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";
import { IUserAccountModel } from "src/app/components/layout/models/user-account.model";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { AuthService } from "src/app/shared/services/auth.service";
import { MainDetailService } from "../../../main-meetings/services/main-detail.service";
import { IParticipantModel } from "../../models/participant.model";
import { IRoomModel } from "../../models/room.model";
import { MainRoomsApiService } from "../../services/main-rooms-api.service";
import { MainRoomAddUpdateDialogComponent } from "../main-room-add-update-dialog/main-room-add-update-dialog.component";
import { MainRoomsParticipantDialogComponent } from "../main-rooms-participant-dialog/main-rooms-participant-dialog.component";

@Component({
  selector: "app-main-rooms",
  templateUrl: "./main-rooms.component.html",
  styleUrls: ["./main-rooms.component.scss"]
})
export class MainRoomsComponent implements OnInit {
  public roomLists: IRoomModel[] = [];
  public loading: boolean = true;
  public updateData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showParticipant: boolean = false;
  public participants: IParticipantModel[] = [];
  public clickedRoom: IRoomModel;
  constructor(private mainRoomsApiService: MainRoomsApiService, private dialog: MatDialog,private mainDetailService:MainDetailService) {
    this.mainDetailService.updateData.subscribe(res => {
      if (res) {
        this.getConferenceRoomList();
      }
    });
  }

  ngOnInit(): void {
    this.getConferenceRoomList();
  }

  public getConferenceRoomList($event?: any): void {
    if ($event != null && $event.target.value.length > 2 && $event.keyCode == 13) {
      this.mainRoomsApiService.getConferenceRoomList($event.target.value.toString()).subscribe(
        res => {
          if (res != null) {
            this.loading = true;
            this.roomLists = res;
          } else {
            this.roomLists = res;
          }
        },
        err => {},
        () => {
          this.loading = false;
        }
      );
    }
    if ($event != null && $event.target.value.length == 0) {
      this.mainRoomsApiService.getConferenceRoomList().subscribe(
        res => {
          this.loading = true;
          this.roomLists = res;
        },
        err => {},
        () => {
          this.loading = false;
        }
      );
    }
    if ($event == null) {
      this.mainRoomsApiService.getConferenceRoomList().subscribe(
        res => {
          this.loading = true;
          this.roomLists = res;
        },
        err => {},
        () => {
          this.loading = false;
        }
      );
    }
  }
  public openAddRoomModal(): void {
    this.dialog.open(MainRoomAddUpdateDialogComponent, {
      data: {
        updateEvent: this.updateData$,
        mode: DialogTypeEnum.Create
      }
    });
  }
  public showParticipantEvent($event: any): void {
    this.clickedRoom = $event;
    this.dialog.open(MainRoomsParticipantDialogComponent,{
      data:{
        id:$event.id,
        roomItem:this.clickedRoom
      }
    })
    
  }
}
