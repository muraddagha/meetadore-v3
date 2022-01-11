import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IMeetingParticipantModel } from "../models/meeting-participant.model";
import { IMeetingUserFilterModel } from "../models/meeting-user-filter.model";
import { IMeetingModel } from "../models/meeting.model";

@Injectable({
  providedIn: "root"
})
export class MainMeetingsApiService {
  constructor(private http: HttpClient) {}

  public getMeetingList(status:string,searchKeyword?: string): Observable<IMeetingModel[]> {
    let param = {
      kv: {
        searchKeyword: searchKeyword ? searchKeyword : "",
        meetingStatus:status.toUpperCase()
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetMeetingList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public addMeetingList(data:any): Observable<any> {
    let param = {
      kv: {
        title:data.title,
        startDate:data.startDate,
        startTime:data.startTime,
        meetingType:data.meetingType,
        type:data.type,
        conferenceType:data.conferenceType!=null?data.conferenceType:""
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/Add`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public editMeeting(data:any): Observable<any> {
    
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/Edit`, data).pipe(
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public deleteMeeting(meetingId: string): Observable<any> {
    let param = {
      kv: {
        id:meetingId,
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/Delete`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public getParticipantList(meetingId: string): Observable<IMeetingParticipantModel[]> {
    let param = {
      kv: {
        meetingId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetParticipantList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public getUserListForFilter(meetingId: string): Observable<IMeetingUserFilterModel[]> {
    let param = {
      kv: {
        meetingId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetUserListForFilter`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public addParticipant(data: any): Observable<any> {
    let param = {
      kv: {
        meetingId: data.meetingId,
        userId: data.userId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/AddParticipant`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public deleteParticipant(data: any): Observable<any> {
    let param = {
      kv: {
        meetingId: data.meetingId,
        userId: data.userId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/DeleteParticipant`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
}
