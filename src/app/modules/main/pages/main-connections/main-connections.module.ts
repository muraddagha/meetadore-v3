import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainConnectionsRoutingModule } from "./main-connections-routing.module";
import { MainConnectionsComponent } from "./components/main-connections/main-connections.component";
import { ComponentsModule } from "src/app/components/components.module";
import { MainModule } from "../../main.module";
import { MainConnectionItemComponent } from "./components/main-connection-item/main-connection-item.component";
import { MainConnectionActiveComponent } from "./components/main-connection-active/main-connection-active.component";
import { MainConnectionWaitComponent } from "./components/main-connection-wait/main-connection-wait.component";
import { MainConnectionQueriesComponent } from "./components/main-connection-queries/main-connection-queries.component";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";

@NgModule({
  declarations: [
    MainConnectionsComponent,
    MainConnectionItemComponent,
    MainConnectionActiveComponent,
    MainConnectionWaitComponent,
    MainConnectionQueriesComponent
  ],
  imports: [CommonModule, MainConnectionsRoutingModule, ComponentsModule, MainModule, NgxSkeletonLoaderModule]
})
export class MainConnectionsModule {}
