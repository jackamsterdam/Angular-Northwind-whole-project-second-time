import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[winter]'
})
export class WinterDirective implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef, private host: TemplateRef<any>) { }

  ngOnInit(): void {
    // debugger  //!so if code doesnt pas this.iswinter funciton () that means it returned false cause its april  so we dont put host in container but if was winter and would be true we would of wrapped the host with the contianer and we woulndt see it on the page !! 
    if (this.isWinter()) {
      this.viewContainerRef.createEmbeddedView(this.host)

    }
  }

  private isWinter(): boolean {
    const now = new Date() 
    const month = now.getMonth() + 1 
    return  month <= 2 || month >= 11
  }

}
