import { Component, OnInit, ViewChild } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IQuestionTypeModel } from "../../models/question-type.model";
import { IStatusModel } from "../../models/status.model";
import { ISurveyModel } from "../../models/survey.model";
import { SupportApiService } from "../../services/support-api.service";
import { SupportAddQuestionComponent } from "../support-add-question/support-add-question.component";
import { MatDialog } from "@angular/material/dialog";
import { SupportDetailService } from "../../services/support-detail.service";
import { SupportDetailType } from "src/app/shared/enums/support-detail-type";
import { SupportDetailComponent } from "../support-detail/support-detail.component";
import { CommonApiService } from "src/app/shared/services/common-api.service";

@Component({
  selector: "app-support-survey",
  templateUrl: "./support-survey.component.html",
  styleUrls: ["./support-survey.component.scss"]
})
export class SupportSurveyComponent implements OnInit {
  public surveys: ISurveyModel[] = [];
  public questionTypes: IQuestionTypeModel[];
  public statuses: IStatusModel[] = [];
  public surveyDetail: ISurveyModel;
  private statusId: string;
  private typeId: string;
  public activeSurveyId: string;
  public loader: boolean = true;
  @ViewChild("content") content: any;
  public updateData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private supportApiService: SupportApiService,
    private dialog: MatDialog,
    private supportDetailService: SupportDetailService,
    private commonApiService: CommonApiService
  ) {
    this.updateData$.subscribe(res => {
      if (res) {
        this.getSurveys();
      }
    });
  }

  ngAfterViewInit() {
    // console.log(this.content.nativeElement.scrollHeight);
  }
  ngOnInit(): void {
    this.getSurveys();
    this.getQuestionType();
    this.getStatus();
    this.supportDetailService.refresh.subscribe(res => {
      if (res) {
        this.getSurveys();
      }
    });
  }

  public getSurveys($event?: any) {
    if ($event != null && $event.target.value.length > 2 && $event.keyCode == 13) {
      this.supportApiService.GetTicketListByUser(null, null, $event.target.value.toString()).subscribe(
        res => {
          if (res != null) {
            this.loader = true;
            this.surveys = res;
            this.getSurveyDetail(res[0]);
          } else {
            this.surveys = res;
          }
        },
        err => {},
        () => {
          this.loader = false;
        }
      );
    }
    if ($event != null && $event.target.value.length == 0) {
      this.supportApiService.GetTicketListByUser().subscribe(
        res => {
          this.loader = true;
          this.surveys = res;
          this.getSurveyDetail(res[0]);
        },
        err => {},
        () => {
          this.loader = false;
        }
      );
    }
    if ($event == null) {
      this.supportApiService.GetTicketListByUser().subscribe(
        res => {
          this.loader = true;
          this.surveys = res;
          this.getSurveyDetail(res[0]);
        },
        err => {},
        () => {
          this.loader = false;
        }
      );
    }
  }
  public getSurveyDetail(survey: ISurveyModel, dialog: boolean = false) {
    this.surveyDetail = survey;
    this.activeSurveyId = survey.id;
    this.supportDetailService.setData(SupportDetailType.Survey, survey);
    if (dialog) {
      this.dialog.open(SupportDetailComponent, {
        data: true
      });
    }
  }
  public addQuestionForm() {
    this.dialog.open(SupportAddQuestionComponent, {
      panelClass: "video-dialog",
      disableClose: true,
      data: {
        statuses: this.statuses,
        questionTypes: this.questionTypes,
        updateEvent: this.updateData$
      },
      maxHeight: "95vh"
    });
  }
  public filterByType($event) {
    this.typeId = $event.target.value.toString();

    if (this.statusId != null) {
      this.supportApiService.GetTicketListByUser(this.typeId, this.statusId).subscribe(
        res => {
          this.loader = true;
          this.surveys = res;
        },
        err => {},
        () => {
          this.loader = false;
        }
      );
    } else {
      this.supportApiService.GetTicketListByUser(this.typeId, null).subscribe(res => {
        this.surveys = res;
      });
    }
  }

  public filterByStatus($event) {
    this.statusId = $event.target.value.toString();
    // console.log(statusId);
    if (this.typeId != null) {
      this.supportApiService.GetTicketListByUser(this.typeId, this.statusId).subscribe(res => {
        this.surveys = res;
      });
    } else {
      this.supportApiService.GetTicketListByUser(null, this.statusId).subscribe(res => {
        this.surveys = res;
      });
    }
  }

  private getQuestionType() {
    this.commonApiService.GetDictionariesListByCommon("100000101").subscribe(res => {
      this.questionTypes = res;
      this.supportDetailService.setSurveyUpdateTicketData(this.questionTypes, this.statuses);
    });
  }
  private getStatus() {
    this.commonApiService.GetDictionariesListByCommon("100000100").subscribe(res => {
      this.statuses = res;
      this.supportDetailService.setSurveyUpdateTicketData(this.questionTypes, this.statuses);
    });
  }
}
