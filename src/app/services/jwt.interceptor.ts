import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import store from '../redux/store';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

  if (store.getState().authState.token) {
    request = request.clone({
      setHeaders: {
        authorization: 'Bearer ' + store.getState().authState.token
      }
    })
  }


    return next.handle(request);
  }
}


// dont forget: 
// providers: [{
//   useClass: JwtInterceptor,
//   provide: HTTP_INTERCEPTORS,
//   multi: true
// }],