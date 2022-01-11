import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportDetailType } from 'src/app/shared/enums/report-detail-type';
import { ReportDetailComponent } from '../report-detail/report-detail.component';

@Component({
  selector: 'app-report-common',
  templateUrl: './report-common.component.html',
  styleUrls: ['./report-common.component.scss'],
})
export class ReportCommonComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDetail(type: ReportDetailType): void {
    if (type == ReportDetailType.StudentTotal) {
      this.dialog.open(ReportDetailComponent, {
        panelClass: 'report-detail-dialog',
        data: { detailType: ReportDetailType.StudentTotal },
        maxHeight: '95vh',
      });
    }
    if (type == ReportDetailType.StudentAge) {
      this.dialog.open(ReportDetailComponent, {
        panelClass: 'report-detail-dialog',
        data: { detailType: ReportDetailType.StudentAge },
        maxHeight: '95vh',
      });
    }
  }
}
