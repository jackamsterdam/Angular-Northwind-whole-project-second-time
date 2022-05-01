import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {
  // constructor() {}
  generate(count: number): Observable<number> {
    return new Observable((observer: Observer<number>) => {
      const timerId = setInterval(() => {
        try {
          const num = Math.floor(Math.random() * 100);
          // Report one value:
          observer.next(num);
          count--;
          if (count === 0) {
            clearInterval(timerId);
            // Report complete:
            observer.complete();
          }
        } catch (err: any) {
          clearInterval(timerId);
          // Report error:
          observer.error(err);
        }
      }, 500);
    });
  }
}
