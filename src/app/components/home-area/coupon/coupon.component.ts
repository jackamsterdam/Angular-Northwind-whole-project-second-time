import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
 amount: number  = 60.00 
 total: number  = 3
 now: Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
