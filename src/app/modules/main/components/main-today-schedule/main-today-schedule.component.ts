import { Component, Input, OnInit } from "@angular/core";
import { IStudentCourseModel } from "../../models/student-course.model";
import { MainApiService } from "../../services/main-api.service";

@Component({
  selector: "app-main-today-schedule",
  templateUrl: "./main-today-schedule.component.html",
  styleUrls: ["./main-today-schedule.component.scss"]
})
export class MainTodayScheduleComponent implements OnInit {
  @Input() today: any;
  public studentCourses: IStudentCourseModel[] = [];
  public loader: boolean = true;
  constructor(private mainApiService: MainApiService) {}

  ngOnInit(): void {
    this.getSysdateCourseForStudent();
  }

  private getSysdateCourseForStudent(): void {
    this.mainApiService.getSysdateCourseForStudent().subscribe(
      res => {
        this.studentCourses = res;
      },
      err => {},
      () => {
        this.loader = false;
      }
    );
  }
}
