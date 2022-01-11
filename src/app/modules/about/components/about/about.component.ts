import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AboutApiService } from '../../services/about-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public productName: any;
  public version: any;
  constructor(private aboutApiService: AboutApiService) {}

  ngOnInit(): void {
    this.getAboutBanner();
  }

  private getAboutBanner() {
    this.aboutApiService
      .getProjectAboutByCommon()
      .pipe(map((res) => res[0]))
      .subscribe((res) => {
        this.productName = res.productName;
        this.version = res.versions;
      });
  }
}
