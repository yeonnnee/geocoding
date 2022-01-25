import { Component, OnInit } from '@angular/core';
import { GridIndex } from '../menu/menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  firstLayerData = [
    { title: 'No.& date of invoice', order: 8, rename: '', value: '' },
    { title: 'L/C No. and date', order: 9, rename: '', value: '' },
    { title: 'Shipper/Exporter', order: 1, rename: '', value: '' },

  ];

  secondLayerData = [
    { title: 'L/C Issuing Bank', order: 10, rename: '', value: '' },
    { title: 'Terms of Delivery and payment', order: 11, rename: '', value: '' },
    { title: 'Consignee', order: 2, rename: '', value: '' },
  ];

  thirdLayerData = [
    {title: 'Notify party', order: 3, rename: '', value: ''},
    {title: 'Remarks', order: 12, rename: '', value: ''},

  ];
  fourthLayerData = [
    {title: 'Port of loading', order: 4, rename: '', value: ''},
    {title: 'Vessel & Voy', order: 6, rename: '', value: ''},
    { title: 'Port of Discharging', order: 5, rename: '', value: '' },
    { title: 'Sailing on or about', order: 7, rename: '', value: '' },
    {title: 'Final destination', order: 5.1, rename: '', value: ''},
    {title: 'Shipping Mark', order: 13, rename: '', value: ''},
  ];

  lastLayerData = [
    {title: 'Empty', order: null, rename: '', value: ''},
    {title: 'Empty', order: null, rename: '', value: ''},
  ]


  right = [
    { title: 'Shipper/Exporter', order: 1, rename: '', value: '' },
    { title: 'Consignee', order: 2, rename: '', value: '' },
    {title: 'Notify party', order: 3, rename: '', value: ''},
  ]
  middle = [
    {title: 'Port of loading', order: 4, rename: '', value: ''},
    { title: 'Port of Discharging', order: 5, rename: '', value: '' },
    {title: 'Final destination', order: 5.1, rename: '', value: ''},

  ]
  bottom = [
    {title: 'Vessel & Voy', order: 6, rename: '', value: ''},
    { title: 'Sailing on or about', order: 7, rename: '', value: '' },

  ]

  left = [
    { title: 'No.& date of invoice', order: 8, rename: '', value: '' },
    { title: 'L/C No. and date', order: 9, rename: '', value: '' },
    { title: 'L/C Issuing Bank', order: 10, rename: '', value: '' },
    { title: 'Terms of Delivery and payment', order: 11, rename: '', value: '' },

    {title: 'Remarks', order: 12, rename: '', value: ''},
    {title: 'Shipping Mark', order: 13, rename: '', value: ''},

  ]

  addedFormIndex:Array<GridIndex> = 
  [
    { title: 'Pallet No.', isOpen: false, key:'palletNo'},
    { title: 'C/T No.', isOpen: false, key:'ctNo' },
    { title: 'SKU', isOpen: false, key:'sku'},
    { title: 'Description of Goods', isOpen: false, key:'descOfGoods' },
    { title: 'Quantity', isOpen: false, key:'qty' },
    { title: 'N/W(Unit)', isOpen: false, key:'nwUnit' },
    { title: 'G/W(Unit)', isOpen: false, key:'gwUnit' },
    { title: 'measurement', isOpen: false, key:'measurement' },
  ]
  
  
  gridData: Array<any> = [];
  columns:Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any) {
    console.log(event)
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
