import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FootballInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey = '59c374a599ebc97a6f6b6ec5fa2dd68e';
    // const apiKey = '';
    const auth = req.clone({
      headers: new HttpHeaders({
        'x-rapidapi-key': apiKey,
      }),
    });
    return next.handle(auth);
  }
}
