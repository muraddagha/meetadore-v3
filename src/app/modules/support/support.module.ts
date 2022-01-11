import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SupportRoutingModule } from "./support-routing.module";
import { SupportComponent } from "./components/support/support.component";
import { ComponentsModule } from "src/app/components/components.module";
import { SupportSurveyComponent } from "./components/support-survey/support-survey.component";
import { SupportMaterialsComponent } from "./components/support-materials/support-materials.component";
import { SupportFaqComponent } from "./components/support-faq/support-faq.component";
import { SupportDetailComponent } from "./components/support-detail/support-detail.component";
import { SupportAddQuestionComponent } from "./components/support-add-question/support-add-question.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VideoDialogComponent } from "./components/video-dialog/video-dialog.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { SupportSidebarComponent } from "./components/support-sidebar/support-sidebar.component";
import { LayoutModule } from "src/app/components/layout/layout.module";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { SupportDetailDialogComponent } from "./components/support-detail-dialog/support-detail-dialog.component";

@NgModule({
  declarations: [
    SupportComponent,
    SupportSurveyComponent,
    SupportMaterialsComponent,
    SupportFaqComponent,
    SupportDetailComponent,
    SupportAddQuestionComponent,
    VideoDialogComponent,
    SupportSidebarComponent,
    SupportDetailDialogComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    LayoutModule,
    ComponentsModule,
    NgxSkeletonLoaderModule
  ]
})
export class SupportModule {}
