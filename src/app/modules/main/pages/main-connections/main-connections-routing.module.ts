import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainConnectionActiveComponent } from "./components/main-connection-active/main-connection-active.component";
import { MainConnectionQueriesComponent } from "./components/main-connection-queries/main-connection-queries.component";
import { MainConnectionWaitComponent } from "./components/main-connection-wait/main-connection-wait.component";
import { MainConnectionsComponent } from "./components/main-connections/main-connections.component";

const routes: Routes = [
  {
    path: "",
    component: MainConnectionsComponent,
    children: [
      { path: "", redirectTo: "active" },
      { path: "active", component: MainConnectionActiveComponent },
      { path: "wait", component: MainConnectionWaitComponent },
      { path: "queries", component: MainConnectionQueriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainConnectionsRoutingModule {}
