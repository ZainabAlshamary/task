import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var token = sessionStorage.getItem(environment.authtoken);
    let req = request;

    if (
      !req.url.endsWith('/Login') ) {
      req = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (req.url.endsWith('/Login')) {
          // Password invalid case
          return throwError(error);
        }
        //error.status == 401
        if (error.status == 401) {
          // if token exp or invalid get new token from refresh token or login again
          this.router.navigateByUrl('/login');
        } else if (error.status == 403) {
          this.router.navigateByUrl('error/403');
        }
        return throwError(error);
      })
    );
  }
}
