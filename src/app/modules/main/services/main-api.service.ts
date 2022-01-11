import { IStudentHomeworkModel } from "./../models/student-homework.model";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IStudentCourseModel } from "../models/student-course.model";
import { IStudentTranscriptModel } from "../models/student-transcript.model";

@Injectable({
  providedIn: "root"
})
export class MainApiService {
  private httpClient: HttpClient;
  constructor(private http: HttpClient, httpBackend: HttpBackend) {
    this.httpClient = new HttpClient(httpBackend);
  }

  public getInfoByIp(): Observable<any> {
    return this.httpClient.get<any>("https://ipapi.co/json/").pipe(
      catchError((err: Error) => {
        return of(null);
      })
    );
  }
  public getWeather(lat: string, lon: string): Observable<any> {
    return this.httpClient
      .get<any>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=23da6e04a7e84455277d847086b63a8a&units=metric&lang=${localStorage.getItem(
          "uni_language"
        )}`
      )
      .pipe(
        catchError((err: Error) => {
          return of(null);
        })
      );
  }
  public getStudentTranscripts(): Observable<IStudentTranscriptModel[]> {
    let param = {
      kv: {
        typeCode: "CURRENT"
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/CourseView/GetStudentTranscript`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((err: Error) => {
        return of(null);
      })
    );
  }

  public getSysdateCourseForStudent(): Observable<IStudentCourseModel[]> {
    let param = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `EducationSystem/CourseView/GetSysdateCourseForStudent`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((err: Error) => {
        return of(null);
      })
    );
  }
  public getSysdateSubworkForStudent(): Observable<IStudentHomeworkModel[]> {
    let param = {
      kv: {}
    };
    return this.http.post(environment.apiUrl + `EducationSystem/CourseView/GetSysdateSubworkForStudent`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((err: Error) => {
        return of(null);
      })
    );
  }
}
