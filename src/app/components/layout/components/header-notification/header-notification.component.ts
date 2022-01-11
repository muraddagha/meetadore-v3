import { Component, Input, OnInit } from "@angular/core";
import { INotificationModel } from "../../models/notification.model";
import { IUserAccountModel, UserAccountModel } from "../../models/user-account.model";
import { HeaderApiService } from "../../services/header-api.service";

@Component({
  selector: "app-header-notification",
  templateUrl: "./header-notification.component.html",
  styleUrls: ["./header-notification.component.scss"]
})
export class HeaderNotificationComponent implements OnInit {
  public isNotificationOpen: boolean = false;
  public notifications: INotificationModel[];
  @Input() openNotification: boolean = false;
  @Input() user: IUserAccountModel;
  constructor(private headerApiService: HeaderApiService) {}

  ngOnInit(): void {
    this.getNotifications();
  }

  public toggleNotification() {
    this.isNotificationOpen = !this.isNotificationOpen;
  }

  public getNotifications(): void {
    this.headerApiService.getUserNotification().subscribe(res => {
      this.notifications = res;
    });
  }
}
