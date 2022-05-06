import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormArrayName, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusItems: string[] = ['valid', 'invalid', 'touched', 'dirty', 'pristine', 'pending'];

  createFormInfo: FormGroup = new FormGroup({});
  generatedForms: FormGroup = new FormGroup({forms: new FormArray([])});

  constructor() {
    this.createFormInfo = new FormGroup({
      formTitle: new FormControl(null),
      formType: new FormControl('input'),
      formInfoByType: new FormGroup({
        labelName: new FormControl(null),
        placeHolder: new FormControl(null),
        defaultValueTxt: new FormControl(null),
        valueTxt: new FormControl(null),
        isChecked: new FormControl(false),
        validation: new FormGroup({
          isRequired: new FormControl(false),
          isReadOnly: new FormControl(false),
          minLength: new FormControl(null),
          maxLength: new FormControl(null)
        })
      })
    });
  }


  get forms() {
    return this.generatedForms.get('forms') as FormArray;
  }
  get formInfoByType() {
    const formInfoByType = this.createFormInfo.get('formInfoByType') as FormGroup;
    return formInfoByType;
  }

  get validationFormGroup() {
    return this.formInfoByType.get('validation') as FormGroup;
  }

  selectFormTypeAsInput() {
    this.createFormInfo.get('formType')?.setValue('input');
  }

  selectFormTypeAsCheckBox() {
    this.createFormInfo.get('formType')?.setValue('checkbox');
  }

  selectFormTypeAsRadio() {
    this.createFormInfo.get('formType')?.setValue('radio');
  }

  checkRequired() {
    const target = document.getElementById('required-input') as HTMLInputElement;
    console.log(target.checked)

      this.validationFormGroup.get('isRequired')?.setValue(!target.checked);

    console.log(this.validationFormGroup.get('isRequired')?.value);
  }

  checkReadOnly() {
    const target = document.getElementById('read-only-input') as HTMLInputElement;
    console.log(target.checked)
    if (target.checked) {
      this.validationFormGroup.get('isReadOnly')?.setValue(true);
      target.checked = true;

    } else {
      this.validationFormGroup.get('isReadOnly')?.setValue(false);
      target.checked = false;

    }
  }

  // TODO: 입력한 양식대로 form 생성
  createForm() {
    const forms = this.generatedForms.get('forms') as FormArray;
    forms.push(this.createFormInfo);
    console.log(forms.controls[0].get('formTitle'))
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
  deleteForm(formIdx: number) {

  }
}
