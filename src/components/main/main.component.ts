import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
