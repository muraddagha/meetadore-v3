import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { NotifierService } from "angular-notifier";
import { BehaviorSubject } from "rxjs";
import { IQuestionTypeModel } from "../../models/question-type.model";
import { IStatusModel } from "../../models/status.model";
import { ISurveyModel } from "../../models/survey.model";
import { SupportApiService } from "../../services/support-api.service";
import { SupportDetailService } from "../../services/support-detail.service";

@Component({
  selector: "app-support-add-question",
  templateUrl: "./support-add-question.component.html",
  styleUrls: ["./support-add-question.component.scss"]
})
export class SupportAddQuestionComponent implements OnInit {
  public form: FormGroup;
  public updateForm: FormGroup;
  public questionTypes: IQuestionTypeModel[];
  public statuses: IStatusModel[];
  public updateData: ISurveyModel;
  constructor(
    private fb: FormBuilder,
    private supportApiService: SupportApiService,
    private supportDetailService: SupportDetailService,
    private dialog: MatDialogRef<SupportAddQuestionComponent>,
    private notifier: NotifierService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.getStatusesAndQuestionTypes();
    this.genereateForm();
    this.getUpdateData();
    this.generateUpdateForm();
    // if (this.updateData != null) {
    //   this.generateUpdateForm();
    //   this.patchData();
    // }

    // this.dialog.backdropClick().subscribe((res) => {
    //   console.log(res);
    // });
  }

  private getStatusesAndQuestionTypes() {
    this.supportDetailService.updateSurveyTicketData.subscribe(res => {
      this.statuses = res.statuses;
      this.questionTypes = res.questionTypes;
    });
    // this.statuses = this.data.statuses;
    // this.questionTypes = this.data.questionTypes;
  }
  private genereateForm() {
    this.form = this.fb.group({
      typeId: ["", [Validators.required]],
      content: ["", [Validators.required]]
    });
  }

  private generateUpdateForm() {
    this.updateForm = this.fb.group({
      id: ["", Validators.required],
      content: ["", Validators.required],
      statusId: ["", Validators.required]
    });
  }

  private getUpdateData() {
    this.supportDetailService.updateData.subscribe(res => {
      if (res != null) {
        this.updateData = res;
        this.patchData();
      }
    });
  }
  private patchData() {
    this.supportDetailService.updateData.subscribe(res => {
      this.updateForm.patchValue({
        id: this.updateData.id,
        content: this.updateData.content,
        statusId: this.updateData.statusId
      });
    });
  }
  public submit() {
    if (this.updateData == null) {
      if (this.form.invalid) return;
      this.supportApiService.addTicket(this.form.value.typeId, this.form.value.content).subscribe(() => {
        this.data.updateEvent.next(true);
        this.cancelAddQuestion(null);
        this.notifier.notify("success", "Sorğu əlavə edildi");
      });
    } else {
      if (this.updateForm.invalid) return;
      this.supportApiService.updateTicket(this.updateForm.value.id, this.updateForm.value.content, this.updateForm.value.statusId).subscribe(() => {
        // this.data.updateEvent.next(true);
        this.supportDetailService.refreshContent();
        this.cancelAddQuestion(null);
        this.notifier.notify("success", "Sorğu yeniləndi");
      });
    }
  }
  public cancelAddQuestion($event?: any) {
    if ($event != null) {
      $event.preventDefault();
    }
    this.supportDetailService.updateData.next(null);

    this.dialog.close();
  }
  ngOnInit(): void {}
}
