import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", redirectTo: "news" },
      { path: "news", loadChildren: () => import("./pages/main-news/main-news.module").then(m => m.MainNewsModule) },
      // {path:'chat',loadChildren:()=>import('./pages/main-chat/main-chat.module').then(m=>m.MainChatModule)},
      {
        path: "meetings",
        loadChildren: () => import("./pages/main-meetings/main-meetings.module").then(m => m.MainMeetingsModule),
        data: {
          activeColor: "#1F6BFF",
          sidebarAction: [
            {
              name: "Cari görüşlər",
              url: "now"
            },
            {
              name: "Keçmiş görüşlər",
              url: "past"
            },
            {
              name: "Buraxılan görüşlər",
              url: "missed"
            }
          ]
        }
      },
      { path: "rooms", loadChildren: () => import("./pages/main-rooms/main-rooms.module").then(m => m.MainRoomsModule) },
      { path: "chat", loadChildren: () => import("./pages/main-chat/main-chat.module").then(m => m.MainChatModule) },
      {
        path: "connections",
        loadChildren: () => import("./pages/main-connections/main-connections.module").then(m => m.MainConnectionsModule),
        data: {
          activeColor: "#1F6BFF",
          sidebarAction: [
            {
              name: "Aktiv kontakt",
              url: "active"
            },
            {
              name: "Gözləmədə olar",
              url: "wait"
            },
            {
              name: "Gələn sorğular",
              url: "queries"
            }
          ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
