import { IVersionModel } from "./../models/about-version.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AboutApiService {
  constructor(private http: HttpClient) { }

  public getProjectTrByCommon(): Observable<any> {
    let params = {
      kv: {}
    };
    return this.http.post<any[]>(environment.apiUrl + `EducationSystem/Support/GetProjectTrByCommon`, params).pipe(map(res => res["tbl"][0]["r"]));
  }

  public getProjectAboutByCommon(): Observable<any> {
    let params = {
      kv: {}
    };
    return this.http.post<any[]>(environment.apiUrl + `EducationSystem/Support/GetProjectAboutByCommon`, params).pipe(
      catchError((error: Error) => {
        return of(null);
      }),
      map(res => res["tbl"][0]["r"])
    );
  }

  public getProjectVersionListByCommon(): Observable<IVersionModel[]> {
    let params = {
      kv: {}
    };
    return this.http
      .post<IVersionModel[]>(environment.apiUrl + `EducationSystem/Support/GetProjectVersionListByCommon`, params)
      .pipe(map(res => res["tbl"][0]["r"]));
  }
}
