import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { UserAccountModel } from '../../models/user-account.model';
import { IModuleModel } from '../../models/user-check-response.model';
import { HeaderApiService } from '../../services/header-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public baseUrl: string = environment.fileUrl;
  public user: UserAccountModel = null;
  public userProfilePhoto: string;
  public modules: IModuleModel[] = [];
  constructor(private headerApiService: HeaderApiService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo(): void {
    this.headerApiService.getUserInfo().subscribe(
      (res) => {
        this.authService.setUser(res);

        this.user = new UserAccountModel(
          res.firstname,
          res.lastname,
          environment.userFileUrl + res.photoFilePath,
          res.lastLoginDate,
          res.account.role.value.az
        );
        this.modules = res.applications[0].modules;
      },
      (err) => { },
      () => {
        this.userProfilePhoto = this.user.photoFilePath;

      }
    );
  }
}
