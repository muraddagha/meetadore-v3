import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './components/board/board.component';
import { BoardCurrentComponent } from './components/board-current/board-current.component';
import { BoardQuestionsComponent } from './components/board-questions/board-questions.component';
import { BoardDetailsComponent } from './components/board-details/board-details.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { BoardPastComponent } from './components/board-past/board-past.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardCurrentComponent,
    BoardQuestionsComponent,
    BoardDetailsComponent,
    BoardPastComponent,
  ],
  imports: [CommonModule, BoardRoutingModule, LayoutModule, ComponentsModule],
})
export class BoardModule {}
