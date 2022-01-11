import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IAnnouncementModel } from "../models/announcement.model";

@Injectable({
  providedIn: "root"
})
export class MainNewsApiService {
  public header = {};

  constructor(private http: HttpClient) {
    const token = environment.tokenKeyword + " " + localStorage.getItem("uni_jwt_token");

    if (token != null) {
      this.header = {
        auth: token
      };
    }
  }

  public getAnnouncementList(): Observable<IAnnouncementModel[]> {
    let param = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `EducationSystem/Announcement/GetAnnouncementList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
}
