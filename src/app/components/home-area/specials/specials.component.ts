import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // <!-- conditioanl rednering  -->
  isWeekend(): boolean {
    const now = new Date() 
    const dayOfWeek = now.getDay() + 1 
    // console.log(now.getDate())  //29 on the 29
    // console.log(now.getDay())  // 5 on friday   so getDAy + 1 will be 6 on friday!! 
    return dayOfWeek >= 6  //if true we are in the weekend
  }

}
  