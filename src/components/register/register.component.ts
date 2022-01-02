import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    // email: new FormControl('', ctrl => '' === ctrl.value ? {required:true} : null)
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPw: new FormControl('', Validators.required),
    lastNm: new FormControl('', Validators.required),
    firstNm: new FormControl('', Validators.required),
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  errorRender(errorMsg:any) {
    console.log(errorMsg);
  }
  cancelRegist() {
    this.router.navigate(['/login']);
  }

  checkVali() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    } else {
      this.confirmRegist();
    }
  }

  confirmRegist() {
    window.alert('회원가입을 축하드립니다.');
  }
}
