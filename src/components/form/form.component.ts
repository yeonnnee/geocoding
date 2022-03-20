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
    isInput: false,
    isCheckBox: false,
    name:null,
  });

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
    console.log('type', this.type.value);
    const type = this.type.get('isCheckBox')?.value ? 'checkbox' : 'Input';
    console.log('validation', this.validation.value);
    const form: FormGroup = this.formBuilder.group({
      value: null,
      type: type,
      name: this.type.get('name')?.value,
      status: this.formBuilder.array([])
    })
    this.forms.push(form);
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
