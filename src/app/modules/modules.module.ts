import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModulesRoutingModule } from "./modules-routing.module";
import { ModulesComponent } from "./modules.component";
import { LayoutModule } from "../components/layout/layout.module";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [ModulesComponent],
  imports: [CommonModule, ModulesRoutingModule, LayoutModule, NgxChartsModule]
})
export class ModulesModule { }
