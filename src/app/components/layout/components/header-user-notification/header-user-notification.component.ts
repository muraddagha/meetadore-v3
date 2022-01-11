import { Component, Input, OnInit } from '@angular/core';
import { UserAccountModel } from '../../models/user-account.model';

@Component({
  selector: 'app-header-user-notification',
  templateUrl: './header-user-notification.component.html',
  styleUrls: ['./header-user-notification.component.scss'],
})
export class HeaderUserNotificationComponent implements OnInit {
  @Input() user: UserAccountModel = null;
  @Input() userProfilePhoto: string;
  constructor() {}

  ngOnInit(): void {}
}
