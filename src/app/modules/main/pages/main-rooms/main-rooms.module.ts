import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoomsRoutingModule } from "./main-rooms-routing.module";
import { MainRoomsComponent } from "./components/main-rooms/main-rooms.component";
import { ComponentsModule } from "src/app/components/components.module";
import { MainRoomItemComponent } from "./components/main-room-item/main-room-item.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MainRoomDialogComponent } from "./components/main-room-dialog/main-room-dialog.component";
import { MainRoomAddUpdateDialogComponent } from "./components/main-room-add-update-dialog/main-room-add-update-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MainRoomsParticipantDialogComponent } from "./components/main-rooms-participant-dialog/main-rooms-participant-dialog.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
@NgModule({
  declarations: [
    MainRoomsComponent,
    MainRoomItemComponent,
    MainRoomDialogComponent,
    MainRoomAddUpdateDialogComponent,
    MainRoomsParticipantDialogComponent
  ],
  imports: [
    CommonModule,
    MainRoomsRoutingModule,
    ComponentsModule,
    NgxSkeletonLoaderModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    NgxMatSelectSearchModule
  ]
})
export class MainRoomsModule {}
