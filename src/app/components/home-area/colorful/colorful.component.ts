import { ColorsService } from './../../../services/colors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorful',
  templateUrl: './colorful.component.html',
  styleUrls: ['./colorful.component.css']
})
export class ColorfulComponent implements OnInit {
randomColor:string

 // DI - Dependency Injection
 
  constructor(private colorsService: ColorsService) { } //Constructor Assignment

  ngOnInit(): void {

   this.randomColor =  this.colorsService.getRandomcolor()
  }

}
