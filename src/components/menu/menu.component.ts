
import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class ExpansionOverviewExample {


  constructor() {
  }
  panelOpenState = false;

  todo = [
    {title: 'Shipper/Exporter', isOpen: false, value: ''},
    {title: 'Consignee', isOpen: false, value: ''},
    {title: 'Notify party', isOpen: false, value: ''},
    {title: 'Port of loading', isOpen: false, value: ''},
    {title: 'Port of Discharging', isOpen: false, value: ''},
    {title: 'Vessel & Voy', isOpen: false, value: ''},
    {title: 'Siling on or about', isOpen: false, value: ''},
    {title: 'No. & date of invoice', isOpen: false, value: ''},
    {title: 'L/C No. and date', isOpen: false, value: ''},
    {title: 'Remarks', isOpen: false, value: ''},
    {title: 'Shipping marks', isOpen: false, value: ''},
    {title: 'Description of goods', isOpen: false, value: ''},
    {title: 'Quantity', isOpen: false, value: ''},
    {title: 'Net-weight', isOpen: false, value: ''},
    {title: 'Gross-weight', isOpen: false, value: ''},
    {title: 'Measurement', isOpen: false, value: ''},
  ];

  done = 
  [
    {title: 'Shipper/Exporter', isOpen: false, value: ''},
    {title: 'Consignee', isOpen: false, value: ''},
    {title: 'Notify party', isOpen: false, value: ''},
    {title: 'Port of loading', isOpen: false, value: ''},
    {title: 'Port of Discharging', isOpen: false, value: ''},
    {title: 'Vessel & Voy', isOpen: false, value: ''},
    {title: 'Siling on or about', isOpen: false, value: ''},
    {title: 'No. & date of invoice', isOpen: false, value: ''},
    {title: 'L/C No. and date', isOpen: false, value: ''},
    {title: 'Remarks', isOpen: false, value: ''},
    {title: 'Shipping marks', isOpen: false, value: ''},
    {title: 'Description of goods', isOpen: false, value: ''},
    {title: 'Quantity', isOpen: false, value: ''},
    {title: 'Net-weight', isOpen: false, value: ''},
    {title: 'Gross-weight', isOpen: false, value: ''},
    {title: 'Measurement', isOpen: false, value: ''},
  ]

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
  }

  activeOverlay(item: any) {
    item.isOpen = !item.isOpen;
    this.done.forEach(doneItem => {
      if (doneItem !== item) {
        doneItem.isOpen = false
      }
    })
  }

}