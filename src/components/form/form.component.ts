import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusList: string[] = ['valid', 'invalid', 'touched', 'dirty', 'pristine', 'pending'];
  formType: FormGroup = this.formBuilder.group({
    type: 'input',
    name:[null, Validators.required]
  });

  checked: boolean = true;

  validation: FormGroup = this.formBuilder.group({
    minLength: null,
    maxLength: null,
    required: false
  });

  forms: FormArray = new FormArray([]); 

  constructor(private formBuilder: FormBuilder) {
    
   }


  getFormGroup(abstractControl: AbstractControl):FormGroup {
    return abstractControl as FormGroup;
  }
  
  createForm() {
    this.formType.markAllAsTouched();

    if (this.formType.invalid) return;
  
    this.create();
  }

  create() {
    const type = this.formType.get('type')?.value;
    const minLengthVali = this.validation.get('minLength')?.value;
    const maxLengthVali = this.validation.get('maxLength')?.value;
    const requiredVali = this.validation.get('required')?.value;

    const form: FormGroup = this.formBuilder.group({
      value: null,
      type: type,
      name: this.formType.get('name')?.value,
      status: this.formBuilder.array([]),
      validationTypes: this.validation.value
    });

    if (minLengthVali) {
      form.get('value')?.setValidators(Validators.minLength(+minLengthVali));
    }

    if (maxLengthVali) {
      form.get('value')?.setValidators(Validators.maxLength(+maxLengthVali));
    }

    if (requiredVali) {
      form.get('value')?.setValidators(Validators.required);
    }
    
    this.forms.push(form);
  }
  
  setFormType(event:Event) {
    const target = event.target as HTMLInputElement;
    const value = target.getAttribute('for');
    
    this.formType.get('type')?.setValue(value);
  }

  hasValidationForm(form: AbstractControl) {
    const minLengthVali = form.get('validationTypes')?.value.minLength;
    const maxLengthVali = form.get('validationTypes')?.value.maxLength;
    const requiredVali = form.get('validationTypes')?.value.required;

    if (minLengthVali || maxLengthVali || requiredVali) {
      return true;
    } else {
      return false;
    }
  }

  markAllAsTouched() {
    this.forms.markAllAsTouched();
  }

  disableForm() {
    this.forms.disable();
  }

  enableForm() {
    this.forms.enable();
  }
}
