import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./components/layout/layout.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { HeaderUserComponent } from "./components/header-user/header-user.component";
import { HeaderNotificationComponent } from "./components/header-notification/header-notification.component";
import { HeaderUserNotificationComponent } from "./components/header-user-notification/header-user-notification.component";
import { GetFirstSidebarActionPipe } from "./pipes/get-first-sidebar-action.pipe";

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderNavComponent,
    HeaderUserComponent,
    HeaderNotificationComponent,
    HeaderUserNotificationComponent,
    GetFirstSidebarActionPipe,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatMenuModule, PerfectScrollbarModule],
  exports: [LayoutComponent, HeaderComponent, SidebarComponent, HeaderNotificationComponent,GetFirstSidebarActionPipe]
})
export class LayoutModule { }
