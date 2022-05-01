import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, reduce, scan, Subscription, take, takeLast, takeWhile, toArray } from 'rxjs';
import { GeneratorService } from 'src/app/services/generator.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-random-numbers',
  templateUrl: './random-numbers.component.html',
  styleUrls: ['./random-numbers.component.css']
})
export class RandomNumbersComponent implements OnDestroy {
arr: number[] = []
private subscription: Subscription
  constructor(private generator: GeneratorService, private notify: NotifyService) { }




  start(): void{
    // Observable without any operators:
    // this.subscription = this.generator.generate(20).subscribe({
    //   next: (num: number) => this.arr.push(num),
    //   error: (err: any)  => this.notify.error(err),
    //   complete: () => this.notify.success('Observable complete :-)')
    // })

  // Observable with filter operator (on-the-fly):
  // this.subscription = this.generator.generate(20).pipe(filter(n => n%2 === 0)).subscribe({
  //   next: (num: number) => this.arr.push(num),
  //   error: (err: any) => this.notify.error(err),
  //   complete: () => this.notify.success('Observable complete :-)')
  // })

  

  //   // Observable with map operator (on-the-fly):
    // this.subscription = this.generator.generate(20).pipe(map(n => n * n)).subscribe({
    //   next: (num: number) => this.arr.push(num),
    //   error: (err: any) => this.notify.error(err),
    //   complete: () => this.notify.success('Observable complete :-)')
    // })

  //    //  Observable with reduce sum operator (on-complete):
    //  this.subscription = this.generator.generate(10).pipe(reduce((sum, n) => n + sum)).subscribe({
    //    next: (num: number) => this.arr.push(num),
    //    error: (err: any) => this.notify.error(err),
    //    complete: () => this.notify.success('Observable complete :-)')
    //  })

  //    // Observable with reduce max operator (on-complete):
    //  this.subscription = this.generator.generate(20).pipe(reduce((max, n) => n > max? n : max)).subscribe({
    //    next: (num: number) => this.arr.push(num),
    //    error: (err: any) => this.notify.error(err),
    //    complete: () => this.notify.success('Observable complete:-)')
    //  })

  //    // Observable with scan sum operator (on-the-fly):
    //  this.subscription = this.generator.generate(20).pipe(scan((sum, n) => n + sum)).subscribe({
    //    next: (num: number) => this.arr.push(num),
    //    error: (err: any) => this.notify.error(err),
    //    complete: () => this.notify.success('Observable complete:-)')
    //  })

  //     // Observable with take operator (on-the-fly):
      // this.subscription = this.generator.generate(20).pipe(take(5)).subscribe({
      //   next: (num: number) => this.arr.push(num),
      //   error: (err: any) => this.notify.error(err),
      //   complete: () => this.notify.success('Observable complete:-)')
      // })

  //      // Observable with takeLast operator (on-complete):
      //  this.subscription = this.generator.generate(20).pipe(takeLast(5)).subscribe({
      //    next: (num: number) => this.arr.push(num),
      //    error: (err: any) => this.notify.error(err),
      //    complete: () => this.notify.success('Observable complete :-)')
      //  })

  //      // Observable with takeWhile operator (on-the-fly):
  //      this.subscription = this.generator.generate(20).pipe(takeWhile(n => n < 80)).subscribe({
  //        next: (num: number) => this.arr.push(num),
  //        error: (err: any) => this.notify.error(err),
  //        complete: () => this.notify.success('Observable complete:-)')
  //      })

  //       // Observable with toArray operator (on-complete):
        // this.subscription = this.generator.generate(20).pipe(toArray()).subscribe({
        //   next: (arr: number[]) => this.arr = arr,
        //   error: (err: any) => this.notify.error(err),
        //   complete: () => this.notify.success('Observable complete :-)')
        // })

  //       // Observable with take and toArray operator (on-complete):
  //       //?double click ==> to turn into braces
  //       this.subscription = this.generator.generate(20).pipe(take(5), toArray()).subscribe({
  //         next: (arr: number[]) => {
  //           return this.arr = arr;
  //         },
  //         error: (err: any) => this.notify.error(err),
  //         complete: () => this.notify.success('Observable complete:-)')
  //       })

  }

  ngOnDestroy(): void {
  if (this.subscription) {
    this.subscription.unsubscribe()
  }
  }

}
