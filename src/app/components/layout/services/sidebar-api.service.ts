import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SidebarApiService {
  constructor(private http: HttpClient) {}

  public getCounts(): Observable<any> {
    let params = {
      kv: {}
    };
    return this.http.post<any[]>(environment.apiUrl + `EducationSystem/Support/GetModuleCount`, params).pipe(map(res => res["kv"]));
  }
}
