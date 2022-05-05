import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusList: string[] = ['valid', 'invalid', 'touched', 'dirty', 'pristine', 'pending'];

  createFormInfo: FormGroup = new FormGroup({});
  generatedForms: FormGroup = new FormGroup({});

  constructor() {
    this.createFormInfo = new FormGroup({
      formTitle: new FormControl(null),
      formType: new FormControl('input'),
      formInfoByType: new FormGroup({
        labelName: new FormControl(null),
        placeHolder: new FormControl(null),
        defaultValueTxt: new FormControl(null),
        isChecked: new FormControl(false),
        validation: new FormGroup({
          isRequired: new FormControl(false),
          isEditable: new FormControl(true),
          minLength: new FormControl(null),
          maxLength: new FormControl(null)
        })
      })
    });

    this.generatedForms = new FormGroup({
      forms: new FormArray([])
    });
   }




  // TODO: 입력한 양식대로 form 생성
  createForm() {
     
  }

  // TODO: 생성한 모든 폼 touched 상태로
  markAllAsTouched() {

  }

  // TODO: 생성한 모든 폼 disable 상태로
  disableForm() {
  
  }
  // TODO: 생성한 모든 폼 enable 상태로

  enableForm() {

  }

  // Form 삭제
  deleteForm() {

  }
}
