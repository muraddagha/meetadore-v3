import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";

const routes: Routes = [
  {
    path: "",
    component: ModulesComponent,
    children: [
      {
        path: "",
        redirectTo: "main"
      },
      {
        path: "main",
        loadChildren: () => import("./main/main.module").then(m => m.MainModule)
      },
      {
        path: "studentplan",
        loadChildren: () => import("./student-plan/student-plan.module").then(m => m.StudentPlanModule),
        data: {
          activeColor: "#ffc000",
          sidebarAction: [
            {
              name: "Keçirilmiş fənlər",
              url: "/studentplan/passed-lessons"
            },
            {
              name: "Cari fənlər",
              url: "/studentplan/current-lessons"
            }
          ]
        }
      },
      {
        path: "about",
        loadChildren: () => import("./about/about.module").then(m => m.AboutModule),
        data: {
          activeColor: "#2F2E41",
          sidebarAction: [
            {
              name: "Ümumi",
              url: "/about/general"
            },
            {
              name: "Versiya",
              url: "/about/version"
            },
            {
              name: "Terms of Reference",
              url: "/about/terms"
            }
          ]
        }
      },
      {
        path: "support",
        loadChildren: () => import("./support/support.module").then(m => m.SupportModule),
        data: {
          activeColor: "#56ccf2",
          sidebarAction: [
            {
              name: "Faq",
              url: "/support/faq"
            },
            {
              name: "Təlimləndirici materiallar",
              url: "/support/materials"
            },
            {
              name: "Sorğu",
              url: "/support/questions"
            }
          ]
        }
      },
      {
        path: "report",
        loadChildren: () => import("./report/report.module").then(m => m.ReportModule),
        data: {
          activeColor: "#35909C",
          sidebarAction: [
            {
              name: "Statistik",
              url: "/report/statistic"
            },
            {
              name: "Şagirdlər",
              url: "/report/students"
            }
          ]
        }
      },
      {
        path: "board",
        loadChildren: () => import("./board/board.module").then(m => m.BoardModule),
        data: {
          activeColor: "#FFC1C7",
          sidebarAction: [
            {
              name: "Keçmiş",
              url: "/board/past"
            },
            {
              name: "Cari",
              url: "/board/current"
            },
            {
              name: "Suallar",
              url: "/board/questions"
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
export class ModulesRoutingModule {}
