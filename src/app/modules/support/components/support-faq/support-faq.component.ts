import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SupportDetailType } from 'src/app/shared/enums/support-detail-type';
import { IFaqModel } from '../../models/faq.model';
import { SupportApiService } from '../../services/support-api.service';
import { SupportDetailService } from '../../services/support-detail.service';
import { SupportDetailDialogComponent } from '../support-detail-dialog/support-detail-dialog.component';
import { SupportDetailComponent } from '../support-detail/support-detail.component';

@Component({
  selector: 'app-support-faq',
  templateUrl: './support-faq.component.html',
  styleUrls: ['./support-faq.component.scss'],
})
export class SupportFaqComponent implements OnInit {
  public faqs: IFaqModel[];
  public faqDetail: IFaqModel;
  public activeFaqId: string;
  public loader: boolean = true;
  constructor(
    private supportApiService: SupportApiService,
    private supportDetailService: SupportDetailService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getFaqs();
  }

  public getFaqs($event?: any) {
    if (
      $event != null &&
      $event.target.value.length > 2 &&
      $event.keyCode == 13
    ) {
      this.supportApiService
        .getFaqListByCommon($event.target.value.toString())
        .subscribe(
          (res) => {
            if (res != null) {
              this.loader = true;
              this.faqs = res;
              this.getFaqDetail(res[0]);
            } else {
              this.faqs = res;
            }
          },
          (err) => {},
          () => {
            this.loader = false;
          }
        );
    }
    if ($event != null && $event.target.value.length == 0) {
      this.supportApiService.getFaqListByCommon().subscribe(
        (res) => {
          this.loader = true;
          this.faqs = res;
          this.getFaqDetail(res[0]);
        },
        (err) => {},
        () => {
          this.loader = false;
        }
      );
    }
    if ($event == null) {
      this.supportApiService.getFaqListByCommon().subscribe(
        (res) => {
          this.loader = true;
          this.faqs = res;
          this.getFaqDetail(res[0]);
        },
        (err) => {},
        () => {
          this.loader = false;
        }
      );
    }
  }

  public getFaqDetail(faq: IFaqModel, dialog: boolean = false) {
    this.faqDetail = faq;
    this.activeFaqId = faq.id;
    this.supportDetailService.setData(SupportDetailType.Faq, faq);
    if (dialog) {
      this.dialog.open(SupportDetailComponent, {});
    }
  }
}
