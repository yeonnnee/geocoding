import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GridIndex } from '../menu/menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // TODO 구조 수정 , title에 맞게 필요한 필드 생성하도록
  addressNeededCol = [
    {title: 'Shipper/Exporter', order: 1, isOpen:false, rename: '', value: '' },
    {title: 'Consignee', order: 2, isOpen:false, rename: '', value: '' },
    {title: 'Notify party', order: 3, isOpen:false, rename: '', value: ''},
  ]
  middle = [
    {title: 'Port of loading', order: 4, isOpen:false, rename: '', value: ''},
    {title: 'Port of Discharging', order: 5, isOpen:false, rename: '', value: '' },
    {title: 'Final destination', order: 5.1, isOpen:false, rename: '', value: ''},
  ]
  bottom = [
    {title: 'Vessel & Voy', order: 6, isOpen:false, rename: '', value: ''},
    {title: 'Sailing on or about', order: 7, isOpen:false, rename: '', value: '' },
  ]

  left = [
    {title: 'No.& date of invoice', order: 8, isOpen:false, rename: '', value: '' },
    {title: 'L/C No. and date', order: 9, isOpen:false, rename: '', value: '' },
    {title: 'L/C Issuing Bank', order: 10, isOpen:false, rename: '', value: '' },
    {title: 'Terms of Delivery and payment', order: 11, isOpen:false, rename: '', value: '' },
    {title: 'Remarks', order: 12, isOpen:false, rename: '', value: ''},
    {title: 'Shipping Mark', order: 13, isOpen:false, rename: '', value: ''},
  ]

  // {
  //   "SHIPPER_EXPORTER": {
  //     "name": "Shipper/Exporter",
  //     "details": [
  //       {
  //         "order": 1,
  //         "name": "회사명",
  //         "type": "string"
  //       },
  //       {
  //         "order": 2,
  //         "name": "주소",
  //         "type": "string"
  //       },
  //       {
  //         "name": "가족",
  //         "order": 0
  //       }
  //     ]
  //   },
  //   "CONSIGNEE": {
  //     "name": "Consignee",
  //     "details": [
  //       {
  //         "name": "회사명",
  //         "type": "string"
  //       },
  //       {
  //         "name": "주소",
  //         "type": "string"
  //       }
  //     ]
  //   }
  // }
  

  exceptionList:any[] = [];
  inputVal:string ='';
  renamedTitle:string ='';

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
  
  
  gridData: Array<any> = [];
  columns:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
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
      row: this.gridData.length + 1,
      data: [
        {
          palletNo: this.gridData.length + 1,
          ctNo: '',
          sku: '',
          descOfGoods: '',
          qty: '',
          nwUnit: '',
          gwUnit: '',
          measurement:''
        }
      ]
    }

    this.gridData.push(newRow)

    console.log('paint',this.gridData)
  }
  disableColumn(item:any) {
    this.exceptionList.push(item)
    this.middle = this.middle.filter(li => li.order !== item.order);
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

  activeBttomListOverlay(list: any) {
    console.log('opne')
    this.bottom.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = !index.isOpen;
      }
    })
  }

  activeRightListOverlay(list: any) {
    console.log('opne')
    this.addressNeededCol.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = !index.isOpen;
      }
    })
  }

  activeMiddleListOverlay(list: any) {
    console.log('opne')
    this.middle.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = !index.isOpen;
      }
    })
  }

  activeLeftListOverlay(list: any) {
    console.log('opne')
    this.left.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = !index.isOpen;
      }
    })
  }

  setValue(e:any, list:any) {
    this.inputVal = e.target.value;
  }

  saveBottomValue(item:any) {
    this.bottom.forEach(index => {
      if(index.title === item.title) {
        index.rename = this.renamedTitle;
        index.value = this.inputVal;
        index.isOpen = false;
      }
    })
  }

  saveRightValue(item:any) {
    this.addressNeededCol.forEach(index => {
      if(index.title === item.title) {
        index.rename = this.renamedTitle;
        index.value = this.inputVal;
        index.isOpen = false;
      }
    })
  }

  saveMiddleValue(item:any) {
    this.middle.forEach(index => {
      if(index.title === item.title) {
        index.rename = this.renamedTitle;
        index.value = this.inputVal;
        index.isOpen = false;
      }
    })
  }

  enableColumn(item:any) {
    item.isOpen = false;
    this.exceptionList.push(item)
    this.middle = this.middle.filter(li => li.order !== item.order);
  }
  enableGridColumn(item:any) {
    this.exceptionList.push(item)
    this.addedFormIndex = this.addedFormIndex.filter(li => li.key !== item.key);
  }

  activeColumn(item:any) {
    this.exceptionList = this.exceptionList.filter(li => li.title !== item.title);
    this.middle.push(item)
  }
  activeGridColumn(item:any) {
    this.exceptionList = this.exceptionList.filter(li => li.title !== item.title);
    this.addedFormIndex = [item, ...this.addedFormIndex]
  }
}
