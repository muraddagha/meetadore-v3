import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatSelect } from "@angular/material/select";
import { NotifierService } from "angular-notifier";
import { DialogTypeEnum } from "src/app/shared/enums/dialog-type";
import { IDictionaryModel } from "src/app/shared/models/dictionary.model";
import { CommonApiService } from "src/app/shared/services/common-api.service";
import { IRoomModel } from "../../models/room.model";
import { MainRoomsApiService } from "../../services/main-rooms-api.service";

@Component({
  selector: "app-main-room-add-update-dialog",
  templateUrl: "./main-room-add-update-dialog.component.html",
  styleUrls: ["./main-room-add-update-dialog.component.scss"]
})
export class MainRoomAddUpdateDialogComponent implements OnInit {
  public form: FormGroup;
  public submitted: boolean = false;
  public dictionaries: IDictionaryModel[];
  public detail: IRoomModel;
  mode: DialogTypeEnum;
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<MainRoomAddUpdateDialogComponent>,
    private commonApiService: CommonApiService,
    private mainRoomsApiService: MainRoomsApiService,
    private notifier: NotifierService
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
  private getDictionariesListByCommon(): void {
    this.commonApiService.GetDictionariesListByCommon("900000013").subscribe(res => {
      this.dictionaries = res;
    });
  }
  private generateForm(): void {
    this.form = this.fb.group({
      conferenceType: [null, [Validators.required]],
      name: ["", [Validators.required]]
    });
  }
  private patchData(): void {
    this.form.patchValue({
      conferenceType: this.detail.conferenceType,
      name: this.detail.name
    });
  }
  public submit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.mode == DialogTypeEnum.Create) {
      this.mainRoomsApiService.createConferenceRoom(this.form.value).subscribe(() => {
        this.submitted = false;
        this.data.updateEvent.next(true);
        this.closeModal();
        this.notifier.notify("success", "Otaq əlavə edildi");
      });
    }
    if (this.mode == DialogTypeEnum.Update) {
      let requestData = {
        kv: {
          id: this.detail.id,
          conferenceType: this.form.value.conferenceType,
          name: this.form.value.name
        }
      };
      this.mainRoomsApiService.editConferenceRoom(requestData).subscribe(() => {
        this.submitted = false;
        this.closeModal();
        this.notifier.notify("success", "Otaq yeniləndi");
      });
    }
  }
  public closeModal(): void {
    this.form.reset();
    this.dialog.close();
  }
}
