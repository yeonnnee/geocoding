
import {Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable, of } from 'rxjs';
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class ExpansionOverviewExample {

  // TODO : 값 입력 및 수정 가능
  // TODO : pallet No 에 여러 아이템 추가 할수 있도록
  // TODO : 드래그시, 값들도 같이 이동
  // TODO : x 버튼 클릭시 해당 컬럼 데이터 모두 제거

  panelOpenState = false;

  fixedIndex = [
    {title: 'Shipper/Exporter', isOpen: false, value: ''},
    {title: 'Consignee', isOpen: false, value: ''},
    {title: 'Notify party', isOpen: false, value: ''},
    {title: 'Port of loading', isOpen: false, value: ''},
    {title: 'Port of Discharging', isOpen: false, value: ''},
    {title: 'Vessel & Voy', isOpen: false, value: ''},
    {title: 'Sailing on or about', isOpen: false, value: ''},
    {title: 'No. & date of invoice', isOpen: false, value: ''},
    {title: 'L/C No. and date', isOpen: false, value: ''},
    {title: 'Remarks', isOpen: false, value: ''},
  ]

  // TODO: operator 'of' 사용 해보기
  formIndex: Array<GridIndex> = [];

  addedFormIndex:Array<GridIndex> = 
  [
    { title: 'Pallet No.', isOpen: false, key:'palletNo'},
    { title: 'C/T No.', isOpen: false, key:'ctNo' },
    { title: 'SKU', isOpen: false, key:'sku'},
    { title: 'Description of Goods', isOpen: false, key:'descOfGoods' },
    { title: 'Quantity', isOpen: false, key:'qty' },
    { title: 'N/W(Unit)', isOpen: false, key:'nwUnit' },
    { title: 'G/W(Unit)', isOpen: false, key:'gwUnit' },
  ]


  formData:Array<any> = []

  columns:Array<string> = [];

  inputVal:string = '';
  gridIndex:Array<any> = [];
  currPalletNo: number = 0;

  constructor() {
  }


  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.columns = [];
    this.addedFormIndex.forEach(item => this.columns.push(item.key));
  }


  paintGrid() {
    if (this.columns.length === 0) {
      this.addedFormIndex.forEach(item => this.columns.push(item.key));
    }

    const newRow = {
      row: this.formData.length + 1,
      data: [
        {
          palletNo: this.formData.length + 1,
          ctNo: '',
          sku: '',
          descOfGoods: '',
          qty: '',
          nwUnit: '',
          gwUnit:'',
        }
      ]
    }

    this.formData.push(newRow)

    console.log(this.formData)
  }

  addSubList(target:any) {
    console.log('addList', target);
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
    console.log(this.formData)
  }

  deleteList(target: any) {
    console.log('del', target);
  
  }

  activeOverlay(item: any) {
    if(item.title === "Pallet No.") {
      return;
    }
    item.isOpen = !item.isOpen;

    this.addedFormIndex.forEach(doneItem => {
      if (doneItem !== item) {
        doneItem.isOpen = false;
      }
    });
  }

  setValue(e:any) {
    this.inputVal = e.target.value;
  }

  saveValue(target: any) {
    console.log('save', target)

    this.formData.forEach((d) => {
      if (d.row === target.row) {
        d.data[target.index][target.column] = target.value;
      }
    })

    return this.formData
  }
}

export class GridIndex {
  title = '';
  isOpen = false;
  key = '';
}

export class RowData {
  row = 0;
  data = [
    {
      palletNo: 0,
      ctNo: '',
      sku: '',
      descOfGoods: '',
      qty: '',
      nwUnit: '',
      gwUnit:'',
    }
  ]
}