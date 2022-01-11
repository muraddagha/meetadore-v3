import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { NotifierService } from "angular-notifier";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { IDictionaryModel } from "src/app/shared/models/dictionary.model";
import { CommonApiService } from "src/app/shared/services/common-api.service";
import { MainRoomAddUpdateDialogComponent } from "../../../main-rooms/components/main-room-add-update-dialog/main-room-add-update-dialog.component";
import { IRoomModel } from "../../../main-rooms/models/room.model";
import { MainRoomsApiService } from "../../../main-rooms/services/main-rooms-api.service";
import { IMeetingModel } from "../../models/meeting.model";
import { MainMeetingsApiService } from "../../services/main-meetings-api.service";
import * as moment from "moment"
import { MainDetailService } from "../../services/main-detail.service";
@Component({
  selector: "app-main-meetings-form-dialog",
  templateUrl: "./main-meetings-form-dialog.component.html",
  styleUrls: ["./main-meetings-form-dialog.component.scss"]
})
export class MainMeetingsFormDialogComponent implements OnInit {
  public form: FormGroup;
  public submitted: boolean = false;
  public meetingTypes: IDictionaryModel[];
  public conferenceTypes: IDictionaryModel[];
  public types: IDictionaryModel[];
  public detail: IMeetingModel;
  mode: DialogTypeEnum;
  public showConferenceTypes:boolean=false;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<MainRoomAddUpdateDialogComponent>,
    private commonApiService: CommonApiService,
    private mainMeetingsApiService: MainMeetingsApiService,
    private notifier: NotifierService,
    private mainDetailService:MainDetailService
  ) {
    this.mode = this.data.mode;
    this.detail = this.data.detail;
  }

  ngOnInit(): void {
    this.generateForm();
    this.getDictionariesListByCommon();
    if (this.detail != undefined && this.detail != null) {
      this.patchData();
    }
  }
  public get f() {
    return this.form.controls;
  }
  public getConferenceTypes($event:any){
    if($event==910000036){
      this.showConferenceTypes=true
      this.form.addControl('conferenceType',new FormControl('', Validators.required))
    } else{
      this.showConferenceTypes=false
      this.form.removeControl('conferenceType')

    }
  }
  private getDictionariesListByCommon(): void {
    this.commonApiService.GetDictionariesListByCommon("900000012").subscribe(res => {
      this.meetingTypes = res;
    });
    this.commonApiService.GetDictionariesListByCommon("900000013").subscribe(res => {
      this.conferenceTypes = res;
    });
    this.commonApiService.GetDictionariesListByCommon("900000018").subscribe(res => {
      this.types = res;
    });
  }
  
  private generateForm(): void {
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      startDate: ["", [Validators.required]],
      startTime: ["", [Validators.required]],
      meetingType: ["", [Validators.required]],
      type:["",[Validators.required]]
    });
  }
  private patchData(): void {
    this.form.get("startDate").patchValue(new Date(this.detail.startDate))
    this.form.patchValue({
      title: this.detail.title,
      startTime: this.detail.startTime,
      meetingType: this.detail.meetingType,
      type: this.detail.type,
    });
  }
  public submit(): void {
    this.form.value.startDate=moment(this.form.value.startDate).format("DD/MM/YYYY")
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.mode == DialogTypeEnum.Create) {
      this.mainMeetingsApiService.addMeetingList(this.form.value).subscribe(() => {
        this.submitted = false;
        this.mainDetailService.updateData.next(true);
        this.closeModal();
        this.notifier.notify("success", "Görüş əlavə edildi");
        this.form.reset();
      });
    }
    if (this.mode == DialogTypeEnum.Update) {
      let requestData = {
        kv: {
          id: this.detail.id,
          title: this.form.value.title,
          startDate: this.form.value.startDate,
          startTime: this.form.value.startTime,
          meetingType: this.form.value.meetingType,
          type:this.form.value.type,
          conferenceType:this.form.value.conferenceType!=null?this.form.value.conferenceType:''
        }
      };
      this.mainMeetingsApiService.editMeeting(requestData).subscribe(res=>{
        if(res.err){
          this.notifier.notify("error", res.err[0].val);
        }
        
      },err=>{},() => {
        this.submitted = false;
        this.mainDetailService.updateData.next(true);
        this.closeModal();
        this.form.reset();
      });
    }
  }
  public closeModal(): void {
    this.form.reset();
    this.dialog.close();
  }
}
