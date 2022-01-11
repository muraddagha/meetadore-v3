import { Component, OnInit } from '@angular/core';
import { AboutApiService } from '../../services/about-api.service';

@Component({
  selector: 'app-about-general',
  templateUrl: './about-general.component.html',
  styleUrls: ['./about-general.component.scss'],
})
export class AboutGeneralComponent implements OnInit {
  public content: any;
  public loader: boolean = true;
  constructor(private aboutApiService: AboutApiService) {}

  ngOnInit(): void {
    this.getGeneralData();
  }

  private getGeneralData() {
    this.aboutApiService.getProjectAboutByCommon().subscribe(
      (res) => {
        this.content = res[0]['content'];
      },
      (err) => {},
      () => {
        this.loader = false;
      }
    );
  }
}
