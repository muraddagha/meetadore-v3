import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserAccountModel } from 'src/app/components/layout/models/user-account.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-main-connections',
  templateUrl: './main-connections.component.html',
  styleUrls: ['./main-connections.component.scss']
})
export class MainConnectionsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
