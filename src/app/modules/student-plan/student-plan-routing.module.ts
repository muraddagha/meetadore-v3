import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentPlanCurrentLessonsComponent } from './components/student-plan-current-lessons/student-plan-current-lessons.component';
import { StudentPlanPassedLessonsComponent } from './components/student-plan-passed-lessons/student-plan-passed-lessons.component';
import { StudentPlanComponent } from './components/student-plan/student-plan.component';

const routes: Routes = [
  {path:'',component:StudentPlanComponent,children:[
    {path:'',redirectTo:'current-lessons',pathMatch:"full"},
    {path:'passed-lessons',component:StudentPlanPassedLessonsComponent},
    {path:'current-lessons',component:StudentPlanCurrentLessonsComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentPlanRoutingModule { }
