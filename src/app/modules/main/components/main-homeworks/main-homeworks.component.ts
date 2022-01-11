import { Component, OnInit } from "@angular/core";
import { IStudentHomeworkModel } from "../../models/student-homework.model";
import { MainApiService } from "../../services/main-api.service";

@Component({
  selector: "app-main-homeworks",
  templateUrl: "./main-homeworks.component.html",
  styleUrls: ["./main-homeworks.component.scss"]
})
export class MainHomeworksComponent implements OnInit {
  public loader: boolean = true;
  public homeworks: IStudentHomeworkModel[];
  constructor(private mainApiService: MainApiService) {}

  ngOnInit(): void {
    this.getSysdateSubworkForStudent();
  }

  private getSysdateSubworkForStudent(): void {
    this.mainApiService.getSysdateSubworkForStudent().subscribe(
      res => {
        this.homeworks = res;
      },
      err => {},
      () => {
        this.loader = false;
      }
    );
  }
}
