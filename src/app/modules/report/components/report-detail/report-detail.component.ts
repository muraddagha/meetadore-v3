import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VideoDialogComponent } from 'src/app/modules/support/components/video-dialog/video-dialog.component';
import { ReportDetailType } from 'src/app/shared/enums/report-detail-type';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.scss'],
})
export class ReportDetailComponent implements OnInit {
  public reportDetailType: ReportDetailType;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<VideoDialogComponent>
  ) {
    this.reportDetailType = data.detailType;
  }

  ngOnInit(): void {}

  public closeModal(): void {
    this.dialog.close();
  }
}
