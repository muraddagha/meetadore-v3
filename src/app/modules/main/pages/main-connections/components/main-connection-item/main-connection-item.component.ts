import { Component, Input, OnInit } from "@angular/core";
import { IConnectionsModel } from "../../models/connections.model";

@Component({
  selector: "app-main-connection-item",
  templateUrl: "./main-connection-item.component.html",
  styleUrls: ["./main-connection-item.component.scss"]
})
export class MainConnectionItemComponent implements OnInit {
  @Input() connection: IConnectionsModel;
  constructor() {}

  ngOnInit(): void {}
}
