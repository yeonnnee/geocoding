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
    isChecked: false,
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

    if (!this.formType.get('isInput')?.value && !this.formType.get('isCheckBox')?.value) {
      this.formType.get('isInput')?.setErrors({ 'required': true });
      this.formType.get('isCheckBox')?.setErrors({ 'required': true });
    } else {
      this.formType.get('isInput')?.setErrors(null);
      this.formType.get('isCheckBox')?.setErrors(null);
    }

    if (this.formType.invalid) return;
  
    this.create();
  }

  create() {
    const type = this.formType.get('isCheckBox')?.value ? 'checkbox' : 'Input';
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
