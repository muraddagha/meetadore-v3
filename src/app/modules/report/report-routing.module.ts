import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportCommonComponent } from './components/report-common/report-common.component';
import { ReportStatisticComponent } from './components/report-statistic/report-statistic.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'students', component: ReportCommonComponent },
      {
        path: 'statistic',
        component: ReportStatisticComponent,
      },
      // { path: 'terms', component: AboutTermsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
