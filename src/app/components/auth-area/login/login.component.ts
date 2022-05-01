import { NotifyService } from './../../../services/notify.service';
import { AuthService } from './../../../services/auth.service';
import { CredentialsModel } from './../../../models/credentials.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
credentials = new CredentialsModel() 

  constructor(private authService: AuthService, private notify: NotifyService, private router: Router) { }

  ngOnInit(): void {
  }

  async submit() {
    try {
      await this.authService.login(this.credentials)
      this.notify.success('You are now logged in ')
      this.router.navigateByUrl('/home')
    } catch (err: any) {
      this.notify.error(err)
    }
  }

}
