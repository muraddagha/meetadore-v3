import { Component, Input, OnInit } from "@angular/core";
import { IStudentTranscriptModel } from "../../models/student-transcript.model";
import { MainApiService } from "../../services/main-api.service";

@Component({
  selector: "app-main-lessons",
  templateUrl: "./main-lessons.component.html",
  styleUrls: ["./main-lessons.component.scss"]
})
export class MainLessonsComponent implements OnInit {
  public studentTranscripts: IStudentTranscriptModel[];
  public loader: boolean = true;
  constructor(private mainApiService: MainApiService) {}

  ngOnInit(): void {
    this.getStudentTranscripts();
  }
  private getStudentTranscripts(): void {
    this.mainApiService.getStudentTranscripts().subscribe(
      res => {
        this.studentTranscripts = res;
      },
      err => {},
      () => {
        this.loader = false;
      }
    );
  }
  public getWeekCharge() {
    return this.studentTranscripts?.reduce((acc, item) => acc + Number(item.weekCharge), 0);
  }
}
