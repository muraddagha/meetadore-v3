import { Component, OnInit } from "@angular/core";
import { IConnectionsModel } from "../../models/connections.model";
import { MainConnectionsApiService } from "../../services/main-connections-api.service";

@Component({
  selector: "app-main-connection-active",
  templateUrl: "./main-connection-active.component.html",
  styleUrls: ["./main-connection-active.component.scss"]
})
export class MainConnectionActiveComponent implements OnInit {
  public connections: IConnectionsModel[];
  public loader: boolean = true;
  constructor(private mainConnectionsApiService: MainConnectionsApiService) {}

  ngOnInit(): void {
    this.getConversationList();
  }

  private getConversationList(): void {
    this.mainConnectionsApiService.getConversationList(0).subscribe(
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
