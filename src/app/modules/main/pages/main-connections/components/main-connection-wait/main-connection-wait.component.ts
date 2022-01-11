import { Component, OnInit } from "@angular/core";
import { IConnectionsModel } from "../../models/connections.model";
import { MainConnectionsApiService } from "../../services/main-connections-api.service";

@Component({
  selector: "app-main-connection-wait",
  templateUrl: "./main-connection-wait.component.html",
  styleUrls: ["./main-connection-wait.component.scss"]
})
export class MainConnectionWaitComponent implements OnInit {
  public connections: IConnectionsModel[];
  public loader: boolean = true;
  constructor(private mainConnectionsApiService: MainConnectionsApiService) {}

  ngOnInit(): void {
    this.getConversationList();
  }

  private getConversationList(): void {
    this.mainConnectionsApiService.getRequestList().subscribe(
      res => {
        this.connections = res;
      },
      err => {},
      () => {
        this.loader = false;
      }
    );
  }
}
