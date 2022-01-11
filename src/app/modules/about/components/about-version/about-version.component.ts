import { Component, OnInit } from '@angular/core';
import { IVersionModel } from '../../models/about-version.model';
import { AboutApiService } from '../../services/about-api.service';

@Component({
  selector: 'app-about-version',
  templateUrl: './about-version.component.html',
  styleUrls: ['./about-version.component.scss'],
})
export class AboutVersionComponent implements OnInit {
  public versions: IVersionModel[];
  public activeVersionId: string;
  public loader: boolean = true;
  constructor(private aboutApiService: AboutApiService) {}

  ngOnInit(): void {
    this.getTermsData();
  }

  private getTermsData() {
    this.aboutApiService.getProjectVersionListByCommon().subscribe(
      (res) => {
        this.versions = res;
        // this.versions
      },
      (err) => {},
      () => {
        this.loader = false;
      }
    );
  }

  public getVersion(version: IVersionModel) {
    this.activeVersionId = version.id;
  }
}
