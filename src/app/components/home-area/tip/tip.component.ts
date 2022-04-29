import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip',
  template: `<div class="box">
    <p>Don't drink water with fruits</p>
  </div>`

})
export class TipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 