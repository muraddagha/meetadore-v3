import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoomsComponent } from './components/main-rooms/main-rooms.component';

const routes: Routes = [
  {path:'',component:MainRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoomsRoutingModule { }
