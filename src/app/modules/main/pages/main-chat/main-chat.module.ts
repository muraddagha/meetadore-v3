import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainChatRoutingModule } from './main-chat-routing.module';
import { MainChatComponent } from './components/main-chat/main-chat.component';


@NgModule({
  declarations: [
    MainChatComponent
  ],
  imports: [
    CommonModule,
    MainChatRoutingModule
  ]
})
export class MainChatModule { }
