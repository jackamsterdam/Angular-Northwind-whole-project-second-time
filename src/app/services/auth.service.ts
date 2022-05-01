import { CredentialsModel } from './../models/credentials.model';
import {  firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './../models/user.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import store from '../redux/store';
import { loginAuthAction, logoutAuthAction, registerAuthAction } from '../redux/auth-state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async register(user: UserModel):Promise<void> {
    const token = await firstValueFrom(this.http.post<string>(environment.registerUrl, user))
    store.dispatch(registerAuthAction(token))

  }

  async login(credentials: CredentialsModel):Promise<void> {
    const token = await firstValueFrom(this.http.post<string>(environment.loginUrl, credentials))
    store.dispatch(loginAuthAction(token))
  }
//not async!!! 
  logout():void {
    store.dispatch(logoutAuthAction())
  }
}
