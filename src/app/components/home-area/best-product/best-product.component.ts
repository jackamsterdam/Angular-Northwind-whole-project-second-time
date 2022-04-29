import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-product',
  templateUrl: './best-product.component.html',
  styleUrls: ['./best-product.component.css']
})
//!doesnt work interfeace/?????????????????????????????
// interface jack {
//   name: string 
//   lastName: string
// }
export class BestProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Event binding 
displayBestProduct(e: Event):void {
    console.log('hi')
    console.log(e)
    console.log(e.target)
    // console.log(e.target.value)
    alert("Best Product: Irish Coffee ");
  }

  passvariable(str: string): void {
    console.log(str)
  }

  // passvariableandEvent(str: string, e: Event):void {
  //   console.log(str)
  //   console.log(e)
  // }
  
  passvariableandEvent( e: Event, str: string):void {
    console.log(str)
    console.log(e)
  }


//!doesnt work interfeace/?????????????????????????????

  // passObject(obj: jack): void {
  //   console.log(obj)
  //   console.log(obj.name)
  //   console.log(obj.lastName)

  // }

}
