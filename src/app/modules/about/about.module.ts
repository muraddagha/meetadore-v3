import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./components/about/about.component";
import { ComponentsModule } from "src/app/components/components.module";
import { AboutVersionComponent } from "./components/about-version/about-version.component";
import { AboutGeneralComponent } from "./components/about-general/about-general.component";
import { AboutTermsComponent } from "./components/about-terms/about-terms.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { LayoutModule } from "src/app/components/layout/layout.module";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [AboutComponent, AboutVersionComponent, AboutGeneralComponent, AboutTermsComponent],
  imports: [CommonModule, AboutRoutingModule, ComponentsModule, PerfectScrollbarModule, LayoutModule, NgxSkeletonLoaderModule]
})
export class AboutModule {}
