import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IParticipantModel } from "../models/participant.model";
import { IRoomFilterModel } from "../models/room-filter.model";
import { IRoomModel } from "../models/room.model";

@Injectable({
  providedIn: "root"
})
export class MainRoomsApiService {
  constructor(private http: HttpClient) {}
  public getConferenceRoomList(searchKeyword?: string): Observable<IRoomModel[]> {
    let param = {
      kv: {
        searchKeyword: searchKeyword ? searchKeyword : ""
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetConferenceRoomList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public createConferenceRoom(data: any) {
    let param = {
      kv: {
        conferenceType: data.conferenceType,
        name: data.name
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/CreateConferenceRoom`, param).pipe(
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public removeConferenceRoom(id: string) {
    let param = {
      kv: {
        id
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/DeleteConferenceRoom`, param).pipe(
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public editConferenceRoom(data: any) {
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/EditConferenceRoom`, data).pipe(
      catchError((error: Error) => {
        return of(null);
      })
    );
  }

  public getConferenceRoomParticipantList(confranceRoomId: string): Observable<IParticipantModel[]> {
    let param = {
      kv: {
        confranceRoomId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetConferenceRoomParticipantList`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public getUserListForConferenceRoomFilter(confranceRoomId: string): Observable<IRoomFilterModel[]> {
    let param = {
      kv: {
        confranceRoomId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/GetUserListForConferenceRoomFilter`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public addConferenceRoomParticipant(data: any): Observable<any> {
    let param = {
      kv: {
        confranceRoomId: data.confranceRoomId,
        userId: data.userId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/AddConferenceRoomParticipant`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
  public deleteConferenceRoomParticipant(data: any): Observable<any> {
    let param = {
      kv: {
        confranceRoomId: data.confranceRoomId,
        userId: data.userId
      }
    };
    return this.http.post(environment.apiUrl + `EducationSystem/ConferenceMeeting/DeleteConferenceRoomParticipant`, param).pipe(
      map(res => res["tbl"][0]["r"]),
      catchError((error: Error) => {
        return of(null);
      })
    );
  }
}
