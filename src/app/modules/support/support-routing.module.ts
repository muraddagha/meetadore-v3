import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailType } from 'src/app/shared/enums/detail-type';
import { SupportFaqComponent } from './components/support-faq/support-faq.component';
import { SupportMaterialsComponent } from './components/support-materials/support-materials.component';
import { SupportSurveyComponent } from './components/support-survey/support-survey.component';
import { SupportComponent } from './components/support/support.component';

const routes: Routes = [
  {
    path: '',
    component: SupportComponent,
    children: [
      { path: '', redirectTo: 'faq', pathMatch: 'full' },
      {
        path: 'faq',
        component: SupportFaqComponent,
        data: { detail: DetailType.ShowDetail },
      },
      {
        path: 'materials',
        component: SupportMaterialsComponent,
        data: { detail: DetailType.NotShowDetail },
      },
      {
        path: 'questions',
        component: SupportSurveyComponent,
        data: { detail: DetailType.ShowDetail },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
