import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  constructor() { }
  // <!-- structural directive *ngsomething *ngFor  -->
// so i have a collection lets  display a collection 
  desserts = [
    {id: 1, name: 'Ice Cream'},
    {id: 1, name: 'Pavlova'},
    {id: 1, name: 'Eclair'},
    {id: 1, name: 'Apple Pie'},
  ]

  ngOnInit(): void {
  }

}
