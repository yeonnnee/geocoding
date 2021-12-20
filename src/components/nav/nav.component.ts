import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, UserInfo } from 'src/service/auth-service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userNm = 'Lemon'
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isLoggedIn$ = new Observable;
  }

  ngOnInit() {
    this.isLoggedIn$ = this.authService._userInfo.pipe(map(x=>x.isLoggedIn));
  }

  onLogout() {
    this.authService.logout();
  }

}
