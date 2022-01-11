import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IFaqModel } from "../models/faq.model";
import { IMaterialModel } from "../models/material.model";
import { ISurveyModel } from "../models/survey.model";

@Injectable({
  providedIn: "root"
})
export class SupportApiService {
  constructor(private http: HttpClient) {
  }

  public getFaqListByCommon(searchKeyword?: string): Observable<IFaqModel[]> {
    let params = {
      kv: {
        searchKeyword: searchKeyword ? searchKeyword : ""
      }
    };
    return this.http.post<IFaqModel[]>(environment.apiUrl + `EducationSystem/Support/GetFaqListByCommon`, params).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public getTrainingMaterialListByCommon(searchKeyword?: string): Observable<IMaterialModel[]> {
    let params = {
      kv: {
        searchKeyword: searchKeyword ? searchKeyword : ""
      }
    };
    return this.http
      .post<IMaterialModel[]>(environment.apiUrl + `EducationSystem/Support/GetTrainingMaterialListByCommon`, params)
      .pipe(
        map(res => res["tbl"][0]["r"]),
        catchError((error: Error) => {
          return of(null);
        })
      );
  }

  public GetTicketListByUser(typeId?: string, statusId?: string, searchKeyword?: string): Observable<ISurveyModel[]> {
    let params = {
      kv: {
        typeId: typeId,
        statusId: statusId,
        searchKeyword: searchKeyword ? searchKeyword : ""
      }
    };

    return this.http.post<ISurveyModel[]>(environment.apiUrl + `EducationSystem/Support/GetTicketListByUser`, params).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public addTicket(typeId: string, content: string): Observable<any> {
    let params = {
      kv: {
        typeId: typeId,
        content: content
      }
    };
    return this.http.post<any>(environment.apiUrl + `EducationSystem/Support/AddTicket`, params);
  }
  public removeTicket(id: string): Observable<any> {
    let params = {
      kv: {
        id: id
      }
    };
    return this.http.post<any>(environment.apiUrl + `EducationSystem/Support/DeleteTicket`, params);
  }
  public updateTicket(id: string, content: string, statusId: string): Observable<any> {
    let params = {
      kv: {
        id: id,
        content: content,
        statusId: statusId
      }
    };
    return this.http.post<any>(environment.apiUrl + `EducationSystem/Support/EditTicket`, params);
  }
}
