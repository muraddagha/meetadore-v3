import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPlanRoutingModule } from './student-plan-routing.module';
import { StudentPlanComponent } from './components/student-plan/student-plan.component';
import { StudentPlanPassedLessonsComponent } from './components/student-plan-passed-lessons/student-plan-passed-lessons.component';
import { StudentPlanCurrentLessonsComponent } from './components/student-plan-current-lessons/student-plan-current-lessons.component';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { StudentPlanDetailComponent } from './components/student-plan-detail/student-plan-detail.component';
import { StudentPlanContentComponent } from './components/student-plan-content/student-plan-content.component';


@NgModule({
  declarations: [
    StudentPlanComponent,
    StudentPlanPassedLessonsComponent,
    StudentPlanCurrentLessonsComponent,
    StudentPlanDetailComponent,
    StudentPlanContentComponent
  ],
  imports: [
    CommonModule,
    StudentPlanRoutingModule,
    LayoutModule,
    ComponentsModule
  ]
})
export class StudentPlanModule { }
