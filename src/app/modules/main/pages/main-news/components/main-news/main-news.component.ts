import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { filter, first, skip } from "rxjs/operators";
import { UserAccountModel } from "src/app/components/layout/models/user-account.model";
import { AuthService } from "src/app/shared/services/auth.service";
import { IAnnouncementModel } from "../../models/announcement.model";
import { MainNewsApiService } from "../../services/main-news-api.service";

@Component({
  selector: "app-main-news",
  templateUrl: "./main-news.component.html",
  styleUrls: ["./main-news.component.scss"]
})
export class MainNewsComponent implements OnInit {
  public announcementLists: IAnnouncementModel[];
  public loader: boolean = true;
  constructor(private mainNewsApiService: MainNewsApiService) {
  }

  ngOnInit(): void {
    this.getAnnouncementList();
  }

  private getAnnouncementList(): void {
    this.mainNewsApiService.getAnnouncementList().subscribe(
      res => {
        this.announcementLists = res;
      },
      err => { },
      () => {
        this.loader = false;
      }
    );
  }
}
