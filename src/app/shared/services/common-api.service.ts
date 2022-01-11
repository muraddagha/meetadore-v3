import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IDictionaryModel } from "../models/dictionary.model";

@Injectable({
  providedIn: "root"
})
export class CommonApiService {
  public header = {};
  constructor(private http: HttpClient) {
    const token = environment.tokenKeyword + " " + localStorage.getItem("uni_jwt_token");

    if (token != null) {
      this.header = {
        auth: token
      };
    }
  }

  public GetDictionariesListByCommon(typeId: string): Observable<IDictionaryModel[]> {
    let params = {
      kv: {
        typeId: typeId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/Dictionaries/GetDictionariesListByCommon`, params, { headers: this.header }).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
}
