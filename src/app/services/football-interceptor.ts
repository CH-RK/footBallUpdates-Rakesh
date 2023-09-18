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
    const apiKey = 'a9caec50728df52be3bea925d025c757';
    // const apiKey = '';
    const auth = req.clone({
      headers: new HttpHeaders({
        'x-rapidapi-key': apiKey,
      }),
    });
    return next.handle(auth);
  }
}
