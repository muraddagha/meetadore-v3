import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, skip } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';
import { IUserAccountModel } from '../layout/models/user-account.model';
import { IUserResponseDataModel } from '../layout/models/user-check-response.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() withInput: boolean = true;
  @Input() withAction: boolean = true;
  @Input() actionText1: string = '';
  @Input() actionText2: string = '';
  @Input() bgImage: string = '';
  @Input() img: string = 's';
  @Input() bannerTextTitle: string = '';
  @Input() bannerTextContent: string = '';
  @Output() changeDataEvent = new EventEmitter();
  @Output() updateDataEvent = new EventEmitter();
  @Input() bannerMain: boolean = false;
  @Input() actionColor: string = '#9B51E0';
  @Input() studentPlan: boolean = false;
  public userInfo$: Observable<IUserResponseDataModel>;
  public userIno$: IUserResponseDataModel;
  public userFilePath = environment.userFileUrl;
  constructor(private authService: AuthService) {
    this.userInfo$ = this.authService.CurrentUserInfo.pipe(filter(user => user != null && user != undefined))
  }

  ngOnInit(): void { }

  changeAction($event: any) {
    $event.preventDefault();
    this.changeDataEvent.emit();
  }
  updateAction($event: any) {
    $event.preventDefault();
    this.updateDataEvent.emit();
  }

  public search($event): void {
    this.updateDataEvent.emit($event);
  }
}
