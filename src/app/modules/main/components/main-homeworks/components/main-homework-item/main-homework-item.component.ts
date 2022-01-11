import { Component, Input, OnInit } from "@angular/core";
import { IStudentHomeworkModel } from "src/app/modules/main/models/student-homework.model";

@Component({
  selector: "app-main-homework-item",
  templateUrl: "./main-homework-item.component.html",
  styleUrls: ["./main-homework-item.component.scss"]
})
export class MainHomeworkItemComponent implements OnInit {
  @Input() homework: IStudentHomeworkModel = null;
  constructor() {}

  ngOnInit(): void {}
}
