import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserAccountModel } from 'src/app/components/layout/models/user-account.model';
import { IUserResponseDataModel } from 'src/app/components/layout/models/user-check-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject: BehaviorSubject<string>
  public token: Observable<string>;
  private userSubject: BehaviorSubject<IUserResponseDataModel> = new BehaviorSubject<IUserResponseDataModel>(null);
  constructor() {
    this.getToken();
  }

  private getToken(): void {
    let token: string = null;
    if (localStorage.getItem("uni_jwt_token") != null) {
      token = localStorage.getItem("uni_jwt_token") as string;
    }
    this.tokenSubject = new BehaviorSubject<string>(token);
    this.token = this.tokenSubject.asObservable();

  }
  public setToken(token: string) {
    this.tokenSubject = new BehaviorSubject<string>(token);
    this.token = this.tokenSubject.asObservable();
  }
  public setUser(user: IUserResponseDataModel): void {
    this.userSubject.next(user);
  }

  public get CurrentUserToken(): string {
    return this.tokenSubject?.value;
  }
  public get CurrentUserInfo(): Observable<IUserResponseDataModel> {
    return this.userSubject.asObservable();
  }
}
