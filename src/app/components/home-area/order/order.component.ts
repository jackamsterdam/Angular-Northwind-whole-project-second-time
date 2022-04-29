import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
item: string
  constructor() { }

  ngOnInit(): void {
  }

  makeOrder(): void {
    // this.item will be empty without two way binding 
    console.log(this.item)
    //nice we can delete whats in the input box as well 
    this.item = ''  //we changing the html   we changing the input
    //this is the other part of 2 way binding im going back to to the html  so []
    //  vs the other bind that is () from the input 
  }

}
