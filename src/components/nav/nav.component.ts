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
  navMenus: NavigationMenu[] = [{
    title: 'Reactive-Forms',
    icon: 'far fa-file-alt',
    routerLink: '/reactive-forms',
  }]

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

interface NavigationMenu {
  title: string,
  icon: string,
  routerLink: string,
  // linkActive: boolean
}