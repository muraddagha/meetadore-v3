import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ConfrimDialogComponent } from "src/app/components/confrim-dialog/confrim-dialog.component";
import { SupportDetailType } from "src/app/shared/enums/support-detail-type";
import { IFaqModel } from "../../models/faq.model";
import { ISurveyModel } from "../../models/survey.model";
import { SupportApiService } from "../../services/support-api.service";
import { SupportDetailService } from "../../services/support-detail.service";
import { SupportAddQuestionComponent } from "../support-add-question/support-add-question.component";

@Component({
  selector: "app-support-detail",
  templateUrl: "./support-detail.component.html",
  styleUrls: ["./support-detail.component.scss"]
})
export class SupportDetailComponent implements OnInit {
  public faq: any;
  public survey: ISurveyModel;
  public loader: boolean = true;
  @Output() removeEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  public showDetails: Observable<boolean>;
  public isDialog: boolean = false;
  constructor(
    private supportApiService: SupportApiService,
    private supporDetailService: SupportDetailService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDetail();
  }

  public getDetail(): void {
    this.supporDetailService.faq.subscribe(res => {
      this.faq = res;
      if (res != null) {
        this.loader = false;
      }
    });
    this.supporDetailService.survey.subscribe(res => {
      this.survey = res;
      if (res != null) {
        this.loader = false;
      }
    });
  }
  public remove() {
    this.dialog
      .open(ConfrimDialogComponent, {
        panelClass: "confrim-dialog",
        maxHeight: "400px",
        data: {
          action: this.supportApiService.removeTicket(this.survey.id)
        }
      })
      .afterClosed()
      .subscribe(() => {
        this.supporDetailService.refreshContent();
        this.closeModal();
      });
  }
  public update() {
    this.addQuestionForm();
    this.supporDetailService.setData(SupportDetailType.UpdateData, this.survey);
    // this.updateEvent.emit(this.survey);
    // this.closeModal();
  }
  public addQuestionForm() {
    this.dialog.open(SupportAddQuestionComponent, {
      panelClass: "video-dialog",
      disableClose: true,
      // data: {
      //   statuses: this.statuses,
      //   questionTypes: this.questionTypes,
      //   updateEvent: this.updateData$,
      // },
      maxHeight: "95vh"
    });
  }
  public closeModal() {
    this.dialog.closeAll();
    // this.dialogRef.close();
  }
}
