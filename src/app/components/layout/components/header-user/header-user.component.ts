import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserAccountModel } from '../../models/user-account.model';
import { HeaderApiService } from '../../services/header-api.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss'],
})
export class HeaderUserComponent implements OnInit {
  @Input() user: UserAccountModel = null;
  @Input() userProfilePhoto: string;
  constructor(private headerApiService: HeaderApiService) {}

  ngOnInit(): void {}
}
