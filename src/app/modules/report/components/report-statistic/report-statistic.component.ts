import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReportDetailType } from 'src/app/shared/enums/report-detail-type';
import { ReportDetailComponent } from '../report-detail/report-detail.component';

@Component({
  selector: 'app-report-statistic',
  templateUrl: './report-statistic.component.html',
  styleUrls: ['./report-statistic.component.scss'],
})
export class ReportStatisticComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  public openDetail(type: ReportDetailType): void {
    if (type == ReportDetailType.Library) {
      this.dialog.open(ReportDetailComponent, {
        panelClass: 'report-detail-dialog',
        data: { detailType: ReportDetailType.Library },
        maxHeight: '95vh',
      });
    }
    if (type == ReportDetailType.Total) {
      this.dialog.open(ReportDetailComponent, {
        panelClass: 'report-detail-dialog',
        data: { detailType: ReportDetailType.Total },
        maxHeight: '95vh',
      });
    }
  }
}
