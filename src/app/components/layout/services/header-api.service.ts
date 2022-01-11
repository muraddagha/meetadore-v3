import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { INotificationModel } from "../models/notification.model";
import { IUserResponseDataModel } from "../models/user-check-response.model";

@Injectable({
  providedIn: "root"
})
export class HeaderApiService {
  constructor(private http: HttpClient) {}

  public getUserInfo(): Observable<IUserResponseDataModel> {
    let params = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `user/check`, params).pipe(map(res => res["data"]));
  }

  public getUserNotification(): Observable<INotificationModel[]> {
    let params = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `EducationSystem/Notification/GetNotificationList`, params).pipe(map(res => res["tbl"][0]["r"]));
  }
}
