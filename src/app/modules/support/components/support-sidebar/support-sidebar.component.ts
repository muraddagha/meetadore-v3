import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ICountModel } from 'src/app/components/layout/models/count.model';
import { SidebarApiService } from 'src/app/components/layout/services/sidebar-api.service';

@Component({
  selector: 'app-support-sidebar',
  templateUrl: './support-sidebar.component.html',
  styleUrls: ['./support-sidebar.component.scss'],
})
export class SupportSidebarComponent implements OnInit {
  public activeColor: any;
  public sidebarAction: any[] = [];
  public faqCount: ICountModel = { name: '', count: '' };
  public ticketCount: ICountModel = { name: '', count: '' };
  public materialCount: ICountModel = { name: '', count: '' };
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sidebarApiService: SidebarApiService
  ) {
    this.faqCount.name = 'Faq';
    this.materialCount.name = 'Təlimləndirici materiallar';
    this.ticketCount.name = 'Sorğu';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.firstChild != null) {
          this.activatedRoute.data.subscribe((res) => {
            if (res != null || res != undefined) {
              this.activeColor = res['activeColor'];
              this.sidebarAction = res['sidebarAction'];
            }
          });
        }
      }
    });
  }

  ngOnInit(): void {
    this.getCounts();
  }

  private getCounts() {
    this.sidebarApiService.getCounts().subscribe((res) => {
      this.faqCount.count = res.FAQ_COUNT;
      this.ticketCount.count = res.TICKET_COUNT;
      this.materialCount.count = res.TRAINING_MATERIAL_COUNT;
    });
  }
}
