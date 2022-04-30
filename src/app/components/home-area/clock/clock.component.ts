import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
time: string 
timerId: number
  constructor() { }
 
  // Same as componentDidMount
  ngOnInit(): void {

    this.timerId = window.setInterval(() => {
      console.log(Math.random())
      const now = new Date() 
      this.time = now.toLocaleTimeString()
    }, 1000)


  }
// Same as componentWillUnmount
  ngOnDestroy(): void {
    window.clearInterval(this.timerId)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Something changed' , changes)
  }

  ngDoCheck(): void {
    console.log("ngDocheck Performs whenever Angular check for changes...");

  }
 


}
