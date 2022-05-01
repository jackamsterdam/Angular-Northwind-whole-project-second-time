import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { NotifyService } from './../../../services/notify.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user = new UserModel()

authForm: FormGroup

firstNameInput: FormControl 
lastNameInput: FormControl 
usernameInput: FormControl
passwordInput: FormControl 

  constructor(private notify: NotifyService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstNameInput = new FormControl('', [Validators.required, Validators.minLength(3)])
    this.lastNameInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
    this.usernameInput = new FormControl('', [Validators.required, Validators.minLength(3)]) 
    this.passwordInput = new FormControl('', [Validators.required, Validators.minLength(3)])
    this.authForm = new FormGroup({
      firstNameBox: this.firstNameInput,
      lastNameBox: this.lastNameInput, 
      usernameBox: this.usernameInput,
      passwordBox: this.passwordInput

    })
  }


  async submit() {
    try {
       this.user.firstName = this.firstNameInput.value
       this.user.lastName = this.lastNameInput.value 
       this.user.username = this.usernameInput.value
       this.user.password = this.passwordInput.value
 
    await this.authService.register(this.user)
    this.notify.success('You have been registered')
    this.router.navigateByUrl('/home')
    } catch (err: any) {
      this.notify.error(err)
    }
   

  }

}
 