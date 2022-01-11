import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./components/main/main.component";
import { MainTopSidebarComponent } from "./components/main-top-sidebar/main-top-sidebar.component";
import { LayoutModule } from "src/app/components/layout/layout.module";
import { ComponentsModule } from "src/app/components/components.module";
import { MainSidebarComponent } from "./components/main-sidebar/main-sidebar.component";
import { MainWeatherComponent } from "./components/main-weather/main-weather.component";
import { MainLessonsComponent } from "./components/main-lessons/main-lessons.component";
import { MainTodayScheduleComponent } from "./components/main-today-schedule/main-today-schedule.component";
import { MainHomeworksComponent } from "./components/main-homeworks/main-homeworks.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { MainTodayScheduleItemComponent } from "./components/main-today-schedule/components/main-today-schedule-item/main-today-schedule-item.component";
import { MainHomeworkItemComponent } from "./components/main-homeworks/components/main-homework-item/main-homework-item.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [
    MainComponent,
    MainTopSidebarComponent,
    MainSidebarComponent,
    MainWeatherComponent,
    MainLessonsComponent,
    MainTodayScheduleComponent,
    MainHomeworksComponent,
    MainTodayScheduleItemComponent,
    MainHomeworkItemComponent,
  ],
  imports: [CommonModule, MainRoutingModule, LayoutModule, ComponentsModule, PerfectScrollbarModule, NgxSkeletonLoaderModule,
    MatMenuModule,LayoutModule
  ],
  exports: [MainTopSidebarComponent, MainSidebarComponent]
})
export class MainModule {}
