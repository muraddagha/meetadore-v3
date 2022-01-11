import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner/banner.component";
import { ModuleContentComponent } from "./module-content/module-content.component";
import { ConfrimDialogComponent } from "./confrim-dialog/confrim-dialog.component";
import { NoDataComponent } from "./no-data/no-data.component";
import { DetailsComponent } from "./details/details.component";
import { LoaderComponent } from "./loader/loader.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    BannerComponent,
    ModuleContentComponent,
    ConfrimDialogComponent,
    NoDataComponent,
    DetailsComponent,
    LoaderComponent,
    PieChartComponent
  ],
  imports: [CommonModule, NgxSkeletonLoaderModule, SharedModule],
  exports: [BannerComponent, ModuleContentComponent, NoDataComponent, DetailsComponent, LoaderComponent]
})
export class ComponentsModule {}
