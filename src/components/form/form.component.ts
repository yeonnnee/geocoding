import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GridIndex } from '../menu/menu.component';
import { PackingListInfo, packingList, gridIndex, GridData } from './mockData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  statusList: string[] = ['valid', 'invalid', 'touched', 'dirty', 'pristine', 'pending'];
  statusForm: FormGroup = new FormGroup({
    valid: new FormControl('', Validators.minLength(6)),
    invalid: new FormControl(''),
    touched: new FormControl(''),
    dirty: new FormControl(''),
    pristine: new FormControl(''),
    pending: new FormControl(''),
  })
}
