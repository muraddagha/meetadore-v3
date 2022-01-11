import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { AuthService } from "../services/auth.service";
// import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let header = {
      key: "",
      value: ""
    };

    let modifiedReq = req.clone();

    if (this.authService.CurrentUserToken != null) {
      header.key = "auth";
      header.value = "Education" + " " + this.authService.CurrentUserToken;

      modifiedReq = req.clone({
        headers: req.headers.set(header.key, header.value)
      });
    }

    return next.handle(modifiedReq).pipe(
      catchError((err, caught: Observable<HttpEvent<any>>) => {
        if (err instanceof HttpErrorResponse) {
          // window.location.replace("https://naa.empro.az/");
          return of(err as any);
        }
        throw err;
      })
    );
  }
}
