import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridIndex } from '../menu/menu.component';
import { AddressInfoSection, packingList } from './mockData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addressInfo: AddressInfoSection[] = [];
  portInfo: any[] = [];
  departureInfo: any[] = [];
  others: any[] = [];


  constructor() { }

  ngOnInit(): void {
    const data = packingList;
    this.addressInfo = data.filter(d => d.category === 'address');
    console.log(this.addressInfo)
  }

}
