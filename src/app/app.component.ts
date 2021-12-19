import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/service/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lemonade';
  isAuthenticated: boolean = false;
  // $isAuthenticated: Observable<boolean>;

  constructor(private route: ActivatedRoute) {
    // this.$isAuthenticated = new Observable(subscriber => {
    //   console.log(this.authService.userInfo);
    //   subscriber.next(this.authService.userInfo.isLogin);
    // });
  }

  ngOnInit() {
    this.route.url.subscribe(x => console.log(x))
    // console.log('asdf')
    // this.authService.$userInfo.subscribe(x => {
    //   this.isAuthenticated = this.authService.userInfo.isLogin;
    //   console.log(this.authService.userInfo,'!!!!!!!!');
    //   // subscriber.next(this.authService.userInfo.isLogin);
    // }) 
  }
}
