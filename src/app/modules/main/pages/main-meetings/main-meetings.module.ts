import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainMeetingsRoutingModule } from "./main-meetings-routing.module";
import { MainMeetingsComponent } from "./components/main-meetings/main-meetings.component";
import { ComponentsModule } from "src/app/components/components.module";
import { MainMeetingsNowComponent } from "./components/main-meetings-now/main-meetings-now.component";
import { MainMeetingsPastComponent } from "./components/main-meetings-past/main-meetings-past.component";
import { MainMeetingsMissedComponent } from "./components/main-meetings-missed/main-meetings-missed.component";
import { MainModule } from "../../main.module";
import { MainMeetingsItemComponent } from "./components/main-meetings-item/main-meetings-item.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MainMeetingsParticipantDialogComponent } from "./components/main-meetings-participant-dialog/main-meetings-participant-dialog.component";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MainMeetingsFormDialogComponent } from "./components/main-meetings-form-dialog/main-meetings-form-dialog.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS} from "@angular/material/core";
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { MatInputModule } from "@angular/material/input";
import { MomentDateModule } from "@angular/material-moment-adapter";
const lang = "en-US"
@NgModule({
  declarations: [
    MainMeetingsComponent,
    MainMeetingsNowComponent,
    MainMeetingsPastComponent,
    MainMeetingsMissedComponent,
    MainMeetingsItemComponent,
    MainMeetingsParticipantDialogComponent,
    MainMeetingsFormDialogComponent
  ],
  imports: [
    CommonModule,
    MainMeetingsRoutingModule,
    ComponentsModule,
    MainModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    NgxSkeletonLoaderModule,
    PerfectScrollbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    NgxMatTimepickerModule.setLocale(lang),
    MatInputModule,
    MomentDateModule,
  ],
  providers:[
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY',
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MM YYYY',
          dateA11yLabel: 'DD/MM/YYYY',
          monthYearA11yLabel: 'MM YYYY',
        },
      },
    },
  ]
})
export class MainMeetingsModule {
}
