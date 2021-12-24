import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/service/auth-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('', Validators.required);
  password = new FormControl('',Validators.required);

  constructor(private authService: AuthService, private route: Router) { 

  }

  ngOnInit(): void {

  }

  checkValidation() {
    this.email.markAsTouched();
    this.password.markAllAsTouched();

    if (this.email.invalid || this.password.invalid) {
      return;
    } else {
      this.authService.login(this.email.value)
    }
  }
}
