import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { DetailType } from "src/app/shared/enums/detail-type";
import { SupportDetailService } from "../../services/support-detail.service";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"]
})
export class SupportComponent implements OnInit {
  public detailType: DetailType = DetailType.ShowDetail;
  constructor(private supporDetailService: SupportDetailService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.activatedRoute.firstChild != null) {
          this.activatedRoute.firstChild.data.subscribe(res => {
            if (res != null || res != undefined) {
              this.detailType = res["detail"];
            }
          });
        }
      }
    });
  }

  ngOnInit(): void {}
}
