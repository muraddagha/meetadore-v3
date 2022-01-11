import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IConnectionsModel } from "../models/connections.model";

@Injectable({
  providedIn: "root"
})
export class MainConnectionsApiService {
  constructor(private http: HttpClient) {}

  public getConversationList(type: number | string): Observable<IConnectionsModel[]> {
    let param = {
      kv: {
        type
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/Conversation/GetConversationList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((err: Error) => {
        return of(null);
      })
    );
  }
  public getRequestList(): Observable<IConnectionsModel[]> {
    let param = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `EducationSystem/Conversation/GetRequestList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((err: Error) => {
        return of(null);
      })
    );
  }
}
