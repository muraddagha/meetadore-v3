import { IQuestionTypeModel } from './question-type.model';
import { IStatusModel } from './status.model';
import { ISurveyModel } from './survey.model';

export class IUpdateSurveyTicketModel {
  statuses: IStatusModel[];
  questionTypes: IQuestionTypeModel[];
  survey: ISurveyModel;
  /**
   *
   */
  constructor(statuses: IStatusModel[], questionTypes: IQuestionTypeModel[]) {
    this.statuses = statuses;
    this.questionTypes = questionTypes;
  }
}
