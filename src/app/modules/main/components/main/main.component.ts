import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { filter } from "rxjs/operators";
import { UserAccountModel } from "src/app/components/layout/models/user-account.model";
import { IOperationModel } from "src/app/components/layout/models/user-check-response.model";
import { HeaderApiService } from "src/app/components/layout/services/header-api.service";
import { AuthService } from "src/app/shared/services/auth.service";
import { MainComponentsEnum } from "../../enums/main-components.enum";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public today: any = moment().format("D MMM YYYY");
  public userComponents: IOperationModel[];
  public user: UserAccountModel = null;
  public mainComponents = MainComponentsEnum

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo(): void {
    this.authService.CurrentUserInfo.pipe(filter(user => user != null && user != undefined))
      .subscribe(res => {
        this.userComponents = res.applications[0].modules[0].operations.filter(c => c.code.includes("CMP"));
        this.user = new UserAccountModel(
          res.firstname,
          res.lastname,
          res.photoFilePath,
          res.lastLoginDate,
          res.userType
        );
      });
  }

  public checkIsUserHasComponent(code: string): boolean {
    if (this.userComponents?.some(c => c.code == code)) return true;
    return false;
  }
}
