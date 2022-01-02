import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  errorRender(errorMsg:any) {
    console.log(errorMsg);
  }
}
