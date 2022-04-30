import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  @Input()
  item: string
  
  @Input()
  price: number 


  constructor() { }

  ngOnInit(): void {
  }

}
