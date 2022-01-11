import { Component, OnInit } from '@angular/core';
import { AboutApiService } from '../../services/about-api.service';

@Component({
  selector: 'app-about-terms',
  templateUrl: './about-terms.component.html',
  styleUrls: ['./about-terms.component.scss'],
})
export class AboutTermsComponent implements OnInit {
  public content: any;
  public loader: boolean = true;

  constructor(private aboutApiService: AboutApiService) {}

  ngOnInit(): void {
    this.getTermsData();
  }

  private getTermsData() {
    this.aboutApiService.getProjectTrByCommon().subscribe(
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
