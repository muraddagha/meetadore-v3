import { Component, Input, OnInit } from "@angular/core";
import { IStudentCourseModel } from "src/app/modules/main/models/student-course.model";

@Component({
  selector: "app-main-today-schedule-item",
  templateUrl: "./main-today-schedule-item.component.html",
  styleUrls: ["./main-today-schedule-item.component.scss"]
})
export class MainTodayScheduleItemComponent implements OnInit {
  @Input() course: IStudentCourseModel;
  constructor() {}

  ngOnInit(): void {}
}
