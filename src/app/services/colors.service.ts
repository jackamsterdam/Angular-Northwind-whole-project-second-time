import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  getRandomcolor(): string {
      const r = Math.floor(Math.random() * 256) 
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      const color = `rgb(${r}, ${g}, ${b})`
      return color
  }
}
