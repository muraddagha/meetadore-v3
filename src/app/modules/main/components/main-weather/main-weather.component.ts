import { HttpClient } from "@angular/common/http";
import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { IUserResponseDataModel } from "src/app/components/layout/models/user-check-response.model";
import { MainApiService } from "../../services/main-api.service";
import * as moment from "moment";
import { IUserAccountModel, UserAccountModel } from "src/app/components/layout/models/user-account.model";
@Component({
  selector: "app-main-weather",
  templateUrl: "./main-weather.component.html",
  styleUrls: ["./main-weather.component.scss"]
})
export class MainWeatherComponent implements OnInit {
  constructor(private mainApiService: MainApiService) { }
  city: string;
  country: string;
  weather: any;
  @Input() today: any;
  @Input() user: IUserAccountModel;
  @HostBinding("class.ready") ready: boolean = false;

  ngOnInit(): void {
    this.getLocation();
  }
  private getLocation(): void {
    navigator.geolocation.watchPosition(
      success => {
        this.getCountry();
        this.getWeather(success.coords.latitude, success.coords.longitude);
      },
      err => { }
    );
  }
  private getCountry(): void {
    this.mainApiService.getInfoByIp().subscribe(res => {
      this.city = res.city;
      this.country = res.country_name;
    });
  }

  private getWeather(lat: any, lon: any): void {
    this.mainApiService.getWeather(lat, lon).subscribe(res => {
      this.weather = res;
      this.ready = true;
    });
  }

  public niceTemp(temp: number): number {
    return Math.round(temp);
  }
}
