import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridIndex } from '../menu/menu.component';
import { PackingListInfo, packingList } from './mockData';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addressInfo: PackingListInfo[] = [];
  portInfo: PackingListInfo[] = [];
  departureInfo: PackingListInfo[] = [];
  others: PackingListInfo[] = [];

  exceptionList:PackingListInfo[] = [];
  constructor() { }

  ngOnInit(): void {
    const data = packingList;
    this.seperateData(data);
  }

  seperateData(data: PackingListInfo[]) {
    this.addressInfo = data.filter(d => d.category === "address");
    this.portInfo = data.filter(d => d.category === "portInfo");
    this.departureInfo = data.filter(d => d.category === "departureInfo");
    this.others = data.filter(d => d.category !== "departureInfo" && d.category !== "address" && d.category !== 'portInfo');
  }

  disablePortInfoColumn(item:PackingListInfo) {
    this.exceptionList.push(item);
    this.portInfo = this.portInfo.filter(d => d.title !== item.title);
  }
  activePortInfoColumn(item: PackingListInfo) {
    this.exceptionList = this.exceptionList.filter(d => d.title !== item.title);
    this.portInfo.push(item)
  }
}
