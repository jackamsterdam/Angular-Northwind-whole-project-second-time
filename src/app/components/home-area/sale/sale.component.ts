import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  
// Property Binding   []
  tooltip: string = 'Only now!'

  constructor() { }

  ngOnInit(): void {
  }

}
