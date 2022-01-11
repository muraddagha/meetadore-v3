import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardCurrentComponent } from './components/board-current/board-current.component';
import { BoardPastComponent } from './components/board-past/board-past.component';
import { BoardQuestionsComponent } from './components/board-questions/board-questions.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      { path: 'current', component: BoardCurrentComponent },
      { path: 'past', component: BoardPastComponent },
      { path: 'questions', component: BoardQuestionsComponent },
      // {
      //   path: 'version',
      //   component: AboutVersionComponent,
      // },
      // { path: 'terms', component: AboutTermsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
