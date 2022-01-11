import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './components/report/report.component';
import { ReportCommonComponent } from './components/report-common/report-common.component';
import { ReportDetailComponent } from './components/report-detail/report-detail.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ReportStatisticComponent } from './components/report-statistic/report-statistic.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReportPieChartComponent } from './components/report-pie-chart/report-pie-chart.component';

@NgModule({
  declarations: [
    ReportComponent,
    ReportCommonComponent,
    ReportDetailComponent,
    ReportStatisticComponent,
    ReportPieChartComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    LayoutModule,
    ComponentsModule,
    PerfectScrollbarModule,
    NgxChartsModule,
    // ChartsModule,
  ],
})
export class ReportModule {}
