import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGeneralComponent } from './components/about-general/about-general.component';
import { AboutTermsComponent } from './components/about-terms/about-terms.component';
import { AboutVersionComponent } from './components/about-version/about-version.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: '', redirectTo: 'general', pathMatch: 'full' },
      { path: 'general', component: AboutGeneralComponent },
      {
        path: 'version',
        component: AboutVersionComponent,
      },
      { path: 'terms', component: AboutTermsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
