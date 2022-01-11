import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  private tokenSubject: BehaviorSubject<string>
  public token: Observable<string>;
  constructor() { }

  public getScreenWidth(): number {
    return screen.width;
  }

  public setToken(token: string) {
    this.tokenSubject = new BehaviorSubject<string>(token);
    this.token = this.tokenSubject.asObservable();
  }
}
