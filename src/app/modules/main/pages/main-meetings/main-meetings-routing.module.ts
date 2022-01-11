import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainMeetingsMissedComponent } from "./components/main-meetings-missed/main-meetings-missed.component";
import { MainMeetingsNowComponent } from "./components/main-meetings-now/main-meetings-now.component";
import { MainMeetingsPastComponent } from "./components/main-meetings-past/main-meetings-past.component";
import { MainMeetingsComponent } from "./components/main-meetings/main-meetings.component";

const routes: Routes = [
  {
    path: "",
    component: MainMeetingsComponent,
    children: [
      { path: "", redirectTo: "now" },
      { path: "now", component: MainMeetingsNowComponent },
      { path: "past", component: MainMeetingsPastComponent },
      { path: "missed", component: MainMeetingsMissedComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMeetingsRoutingModule {}
