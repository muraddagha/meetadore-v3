import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SupportDetailType } from "src/app/shared/enums/support-detail-type";
import { IFaqModel } from "../models/faq.model";
import { IQuestionTypeModel } from "../models/question-type.model";
import { IStatusModel } from "../models/status.model";
import { ISurveyModel } from "../models/survey.model";
import { IUpdateSurveyTicketModel } from "../models/update-survey-ticket.model";

@Injectable({
  providedIn: "root"
})
export class SupportDetailService {
  public updateData: BehaviorSubject<ISurveyModel> = new BehaviorSubject<ISurveyModel>(null);

  public survey: BehaviorSubject<ISurveyModel> = new BehaviorSubject<ISurveyModel>(null);
  public faq: BehaviorSubject<IFaqModel> = new BehaviorSubject<IFaqModel>(null);
  public updateSurveyTicketData: BehaviorSubject<IUpdateSurveyTicketModel> = new BehaviorSubject<IUpdateSurveyTicketModel>(null);
  public refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  public setData(detailType: SupportDetailType, data: any) {
    if (detailType == SupportDetailType.Faq) {
      this.survey.next(null);
      this.faq.next(data);
    }
    if (detailType == SupportDetailType.Survey) {
      this.faq.next(null);
      this.survey.next(data);
    }
    if (detailType == SupportDetailType.UpdateData) {
      this.updateData.next(data);
    }
  }
  public setNull() {
    this.faq.next(null);
    this.survey.next(null);
    this.updateData.next(null);
  }

  public setSurveyUpdateTicketData(questionTypes?: IQuestionTypeModel[], statuses?: IStatusModel[]): void {
    if (questionTypes != null && statuses != null) {
      var updateSurveyTicketData: IUpdateSurveyTicketModel = new IUpdateSurveyTicketModel(statuses, questionTypes);
      this.updateSurveyTicketData.next(updateSurveyTicketData);
    }
  }
  public refreshContent(): void {
    this.refresh.next(true);
  }
}
