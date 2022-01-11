import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-modules',
  template: `<app-layout></app-layout>`,
})
export class ModulesComponent implements OnInit {
  private token;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) {
    this.setTokenLocalStorage();
    this.removeQueryParam();
  }

  ngOnInit(): void { }
  public setTokenLocalStorage(): void {
    this.token = this.route.snapshot.queryParams.tkn;
    if (this.token != undefined) {

      localStorage.setItem('uni_jwt_token', `${this.token}`);
      this.authService.setToken(this.token);
    }
  }

  public removeQueryParam(): void {
    var currURL = window.location.href;
    var url = currURL.split(window.location.host)[1].split('?')[0];
    window.history.pushState({}, document.title, url);
  }
}
