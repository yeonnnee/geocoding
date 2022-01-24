
import {Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable, of } from 'rxjs';
import { SignaturePad } from 'angular2-signaturepad';
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  overlayTarget = {row:0, title:'', column:'', index:0}

  fixedIndex = [
    {title: 'Shipper/Exporter', isOpen: false, value: ''},
    {title: 'No.& date of invoice', isOpen: false, value: ''},
    {title: 'L/C No. and date', isOpen: false, value: ''},
    {title: 'L/C Issuing Bank', isOpen: false, value: ''},
    {title: 'Consignee', isOpen: false, value: ''},
    {title: 'Terms of Delivery and payment', isOpen: false, value: ''},
    {title: 'Notify party', isOpen: false, value: ''},
    {title: 'Remarks', isOpen: false, value: ''},
    {title: 'Port of loading', isOpen: false, value: ''},
    {title: 'Port of Discharging', isOpen: false, value: ''},
    {title: 'Final destination', isOpen: false, value: ''},
    {title: 'Shipping Mark', isOpen: false, value: ''},
    {title: 'Vessel & Voy', isOpen: false, value: ''},
    {title: 'Sailing on or about', isOpen: false, value: ''},
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
  signatureImg: string = '';
  @ViewChild(SignaturePad)
  signaturePad!: SignaturePad;

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 300,
    'canvasHeight': 100
  };

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 2); 
    // this.signaturePad.clear(); 
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
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
    this.formData.forEach(d => {
      if (d.row === target.row) {
        d.data.pop(target.index);
      }
    })
  }

  activeOverlay(list: any) {
    console.log(list)
    this.fixedIndex.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = true;
      }
    })
  }

  closeOverlay(list: any) {
    this.fixedIndex.forEach(index => {
      if(index.title === list.title) {
        index.isOpen = false;
      }
    })
  }

  setValue(e:any, list:any) {
    this.inputVal = e.target.value;
  }

  saveValue(list: any) {
    this.fixedIndex.forEach(index => {
      if(index.title === list.title) {
        index.value = this.inputVal;
        index.isOpen = false;
      }
    })
  }

  saveConfirmedValue(target:any) {
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