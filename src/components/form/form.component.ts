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

  exceptionList: PackingListInfo[] = [];
  gridData: Array<any> = [];
  columns:Array<string> = [];

  addedFormIndex:Array<GridIndex> = 
  [
    { title: 'Pallet No.', order:14, isOpen: false, key:'palletNo'},
    { title: 'C/T No.',order:15, isOpen: false, key:'ctNo' },
    { title: 'SKU',order:16, isOpen: false, key:'sku'},
    { title: 'Description of Goods',order:17, isOpen: false, key:'dog' },
    { title: 'Quantity', order:18, isOpen: false, key:'qty' },
    { title: 'N/W(Unit)', order:19, isOpen: false, key:'nwUnit' },
    { title: 'G/W(Unit)', order:20,isOpen: false, key:'gwUnit' },
    { title: 'Measurement', order:21,isOpen: false, key:'measurement' },
  ]
  

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


  paintGrid() {
    if (this.columns.length === 0) {
      this.addedFormIndex.forEach(item => this.columns.push(item.key));
    }

    const newRow = {
      row: this.gridData.length + 1,
      data: [
        {
          palletNo: this.gridData.length + 1,
          ctNo: '',
          sku: '',
          descOfGoods: '',
          qty: '',
          nwUnit: '',
          gwUnit:'',
        }
      ]
    }

    this.gridData.push(newRow)

    console.log('paint',this.gridData)
  }
  saveConfirmedValue(target:any) {
    this.gridData.forEach((d) => {
      if (d.row === target.row) {
        d.data[target.index][target.column] = target.value;
      }
    })

    return this.gridData;
  }

  addSubList(target: any) {
    console.log(target)
    const palletNo = target.data[0].palletNo;
    const subData = {
      palletNo: palletNo,
      ctNo: '',
      sku: '',
      descOfGoods: '',
      qty: '',
      nwUnit: '',
      gwUnit:'',
    }
    target.data.push(subData);
  }

  deleteList(target: any) {
    console.log(target)
    this.gridData.forEach(d => {
      if (d.row === target.row) {
        d.data.pop(target.index);
      }
    })
  }

}
