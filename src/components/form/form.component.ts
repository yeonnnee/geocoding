import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GridIndex } from '../menu/menu.component';
import { PackingListInfo, packingList, gridIndex, GridData } from './mockData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusList: string[] = ['valid', 'invalid', 'touched', 'dirty', 'pristine', 'pending'];
  type: FormGroup = this.formBuilder.group({
    isChecked: true,
    isInput: true,
    isCheckBox: false,
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
    this.type.markAllAsTouched();

    if (!this.type.get('isInput')?.value && !this.type.get('isCheckBox')?.value) {
      this.type.get('isInput')?.setErrors({ 'required': true });
      this.type.get('isCheckBox')?.setErrors({ 'required': true });
    } else {
      this.type.get('isInput')?.setErrors(null);
      this.type.get('isCheckBox')?.setErrors(null);
    }

    if (this.type.invalid) return;
  
    this.create();
  }

  create() {
    const type = this.type.get('isCheckBox')?.value ? 'checkbox' : 'Input';
    console.log('validation', this.validation.value);
    const form: FormGroup = this.formBuilder.group({
      value: null,
      type: type,
      name: this.type.get('name')?.value,
      status: this.formBuilder.array([])
    });

    
    this.forms.push(form);
  }
  
  markAllAsTouched() {
    this.forms.markAllAsTouched();
  }

  disableForm() {
    this.forms.disable();

    // this.forms.controls.forEach(con => {
    //   con.get('value')?.disable();
    // })
  }

  enableForm() {
    this.forms.enable();
  }
}
