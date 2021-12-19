import { Component } from '@angular/core';
import { AuthService } from 'src/service/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lemonade';
  isAuthenticated: boolean = false;

  constructor(private authService:AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.userInfo ? true : false;
  }
}
