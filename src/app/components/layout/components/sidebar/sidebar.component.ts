import { Component, HostBinding, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SidebarApiService } from '../../services/sidebar-api.service';
import { ICountModel } from '../../models/count.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public activeColor: any;
  public sidebarAction: any[] = [];
  public faqCount: ICountModel = { name: '', count: '' };
  public ticketCount: ICountModel = { name: '', count: '' };
  public materialCount: ICountModel = { name: '', count: '' };
  public activeAction: any = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sidebarApiService: SidebarApiService
  ) {
    this.faqCount.name = 'Faq';
    this.materialCount.name = 'Təlimləndirici materiallar';
    this.ticketCount.name = 'Sorğu';
    this.getSidebarItemsByRouter();
    
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
  public getActiveSidebarAction(action: any): void {
    this.activeAction = action.name;
  }
  private getSidebarItemsByRouter():void{
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.firstChild != null) {
          this.activatedRoute.data.subscribe((res) => {
            if (JSON.stringify(res) !== '{}') {
              this.activeColor = res['activeColor'];
              this.sidebarAction = res['sidebarAction'];
            } else{
              this.activatedRoute.firstChild.data.subscribe(res=>{
                if (JSON.stringify(res) !== '{}'){
                  this.activeColor = res['activeColor'];
                  this.sidebarAction = res['sidebarAction'];
                }
              })
            }
          });
        }
      }
    });
  }
}
