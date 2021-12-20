import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userInfo: BehaviorSubject<UserInfo>;

  get _userInfo() {
    return this.userInfo.asObservable();
  }

  constructor(
    private router: Router
  ) {
    this.userInfo = new BehaviorSubject<UserInfo>({
      name: 'Lemon',
      email: '',
      isLoggedIn:false
    })
  }

  login(email:string) {
    this.userInfo.next({
      name:'Lemon',
      email: email,
      isLoggedIn: true
    });
    this.router.navigate(['/home']);
  }

  logout() {
    this.userInfo.next({
      name:'Lemon',
      email: '',
      isLoggedIn: false
    });
    this.router.navigate(['/login']);
  }
  
}


export interface UserInfo {
  name: string;
  email: string;
  isLoggedIn: boolean;
}