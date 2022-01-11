import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainNewsRoutingModule } from "./main-news-routing.module";
import { MainNewsComponent } from "./components/main-news/main-news.component";
import { ComponentsModule } from "src/app/components/components.module";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { MainNewsItemComponent } from "./components/main-news-item/main-news-item.component";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [MainNewsComponent, MainNewsItemComponent],
  imports: [CommonModule, MainNewsRoutingModule, ComponentsModule, PerfectScrollbarModule, SharedModule, NgxSkeletonLoaderModule]
})
export class MainNewsModule { }
