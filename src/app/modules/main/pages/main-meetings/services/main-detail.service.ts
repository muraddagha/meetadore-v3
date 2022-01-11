import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMeetingModel } from '../models/meeting.model';

@Injectable({
  providedIn: 'root'
})
export class MainDetailService {
  public updateData:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  public mainMeetingsDetail:BehaviorSubject<IMeetingModel>=new BehaviorSubject<IMeetingModel>(null)
  constructor() { }
}
