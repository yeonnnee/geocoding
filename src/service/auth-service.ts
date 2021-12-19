import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: UserInfo;
  $userInfo: Observable<UserInfo>;

  constructor() {
    this.userInfo = {
      name: '',
      email: '',
      isLogin: false
    }
    this.$userInfo = new Observable(subscriber => {
      console.log(this.userInfo);
      subscriber.next(this.userInfo);
    });
  }

  ngOnInit() {
  }
}

interface UserInfo {
  name: string;
  email: string;
  isLogin: boolean;
}