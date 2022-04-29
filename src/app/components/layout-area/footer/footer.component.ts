import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
// date: string = ''
date: Date = new Date()
  constructor() { }

  ngOnInit(): void {
    // const now = new Date() 
    // this.date = now.toLocaleDateString()
  }

}
