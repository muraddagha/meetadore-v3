import { Component, OnInit } from '@angular/core';
import { IMeetingModel } from '../../models/meeting.model';
import { MainDetailService } from '../../services/main-detail.service';
import { MainMeetingsApiService } from '../../services/main-meetings-api.service';

@Component({
  selector: 'app-main-meetings-missed',
  templateUrl: './main-meetings-missed.component.html',
  styleUrls: ['./main-meetings-missed.component.scss']
})
export class MainMeetingsMissedComponent implements OnInit {
  public meetingList: IMeetingModel[] = [];
  public loader:boolean=true;
  constructor(private mainMeetingsApiService:MainMeetingsApiService,private mainDetailService:MainDetailService ) { }

  ngOnInit(): void {
    this.mainDetailService.updateData.subscribe(res=>{
      if(res){
         this.getMeetingList();
         this.mainDetailService.updateData.next(false);
      }
    })
    this.getMeetingList();
  }

  public getMeetingList(): void {
    this.mainMeetingsApiService.getMeetingList("Decline").subscribe(res => {
      this.meetingList = res;
    },err=>{},()=>{
      this.loader=false
    });
  }

}
