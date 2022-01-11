import { Component, Input, OnInit } from "@angular/core";
import { IAnnouncementModel } from "../../models/announcement.model";

@Component({
  selector: "app-main-news-item",
  templateUrl: "./main-news-item.component.html",
  styleUrls: ["./main-news-item.component.scss"]
})
export class MainNewsItemComponent implements OnInit {
  @Input() announcement: IAnnouncementModel;
  constructor() {}

  ngOnInit(): void {}
}
