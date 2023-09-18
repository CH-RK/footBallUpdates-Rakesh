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
    const apiKey = '75ae6c12ab6417089aa84000407fe0b6';
    // const apiKey = '';
    const auth = req.clone({
      headers: new HttpHeaders({
        'x-rapidapi-key': apiKey,
      }),
    });
    return next.handle(auth);
  }
}
