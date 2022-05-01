import { UserModel } from './../../../models/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import store from 'src/app/redux/store';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit, OnDestroy {
user: UserModel
private unsubscribe: Unsubscribe
  constructor() { }


  ngOnInit(): void {
    this.user = store.getState().authState.user

    this.unsubscribe = store.subscribe(() => {
      this.user= store.getState().authState.user 
    })
  }

  ngOnDestroy(): void {
   this.unsubscribe()
  }
}
