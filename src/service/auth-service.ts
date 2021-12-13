import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: UserInfo;

  constructor() {
    this.userInfo={name:'choung', email:'yeonnnee@gmail.com'}

  }
}

interface UserInfo {
  name: string;
  email: string;
}