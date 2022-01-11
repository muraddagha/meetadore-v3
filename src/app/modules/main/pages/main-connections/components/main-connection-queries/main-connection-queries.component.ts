import { Component, OnInit } from "@angular/core";
import { IConnectionsModel } from "../../models/connections.model";
import { MainConnectionsApiService } from "../../services/main-connections-api.service";

@Component({
  selector: "app-main-connection-queries",
  templateUrl: "./main-connection-queries.component.html",
  styleUrls: ["./main-connection-queries.component.scss"]
})
export class MainConnectionQueriesComponent implements OnInit {
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
