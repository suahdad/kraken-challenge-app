import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentuser = this.userService.CurrentUserValue;
    if (currentuser && currentuser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentuser.token}`
        }
      })
    }

    return next.handle(request);

    return next.handle(request);
  }
}
