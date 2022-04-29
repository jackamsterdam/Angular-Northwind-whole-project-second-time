import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {
  // <!-- attribute directive [ngSomething] -->

dynamicClass: string = Math.random() < 0.5 ? 'cool' : 'nice'
  constructor() { }

  ngOnInit(): void {

   
  }

}
