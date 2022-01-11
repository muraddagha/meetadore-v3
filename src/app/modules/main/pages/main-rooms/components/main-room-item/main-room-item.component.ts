import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IRoomModel } from "../../models/room.model";

@Component({
  selector: "app-main-room-item",
  templateUrl: "./main-room-item.component.html",
  styleUrls: ["./main-room-item.component.scss"]
})
export class MainRoomItemComponent implements OnInit {
  @Input() roomItem: IRoomModel;
  @Output() showParticipant = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public openParticipantDetail(): void {
    this.showParticipant.emit(this.roomItem);
  }
}
