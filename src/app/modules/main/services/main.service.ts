import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MainService {
  public refresh: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public refreshContent(): void {
    this.refresh.next(true);
  }
}
