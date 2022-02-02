import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridIndex } from '../menu/menu.component';
import { PackingListInfo, packingList, gridIndex, GridData } from './mockData';

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

  exceptionList: any[] = [];
  productInfo: Array<GridData> = [];
  columns:Array<string> = [];
  gridHeader: Array<GridIndex> = gridIndex;

  constructor() { }

  ngOnInit(): void {
    const data = packingList;
    this.seperateData(data);

    if (this.columns.length === 0) {
      this.gridHeader.forEach(item => this.columns.push(item.key));
    }
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

  disableGridCol(item:any) {
    this.columns = this.columns.filter(col => col !== item.key);
    this.gridHeader = this.gridHeader.filter(formIdx => formIdx.key !== item.key);
    this.exceptionList.push(item);
    console.log(this.columns)
  }

  activeGridColumn(item: any) {
    this.exceptionList = this.exceptionList.filter(d => d.title !== item.title);
    this.gridHeader = [item, ...this.gridHeader];
    this.columns = [item.key, ...this.columns];
  }

  paintGrid() {
    const newRow = {
      row: this.productInfo.length + 1,
      data: [
        {
          palletNo: this.productInfo.length + 1,
          ctNo: '',
          sku: '',
          descOfGoods: '',
          qty: '',
          nwUnit: '',
          gwUnit:'',
        }
      ]
    }

    this.productInfo.push(newRow);

    console.log('paint',this.productInfo)
  }
  saveConfirmedValue(target:any) {
    this.productInfo.forEach((d:any) => {
      if (d.row === target.row) {
        d.data[target.index][target.column] = target.value;
      }
    })

    return this.productInfo;
  }

  addSubList(target: any) {
    const subData = {
      palletNo: '',
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
    this.productInfo.forEach((d:any) => {
      if (d.row === target.row) {
        d.data.pop(target.index);
      }
    })

    console.log('ela',this.productInfo)
  }

}
