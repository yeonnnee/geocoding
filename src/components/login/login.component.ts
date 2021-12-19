import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/service/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', Validators.required);
  password = new FormControl('',Validators.required);

  constructor(private authService: AuthService, private route: Router) { 

  }

  ngOnInit(): void {

  }

  checkValidation() {
    this.email.markAsTouched();
    this.password.markAllAsTouched();
    // console.log('here')

    if (this.email.invalid || this.password.invalid) {
      return;
    } else {
      this.login();
    }
  }

  login() {

    this.authService.$userInfo.subscribe(x => {
      this.authService.userInfo  = {
        name:'Choungular',
        email: this.email.value,
        isLogin: true
      }
    })

    this.route.navigate(['/home']);
  }
}
