import { Router } from '@angular/router';
import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private notify: NotifyService, private router: Router) { }

  ngOnInit(): void {
  this.authService.logout()
    this.notify.success('You are logged out')
    this.router.navigateByUrl('/home')
  //  so 3 thisg sould happen  he suupose to throw me out of the page by routing me to home he suupsoe to delte the token and he suppose to give me a messsage that i loogged out 

  }

}
