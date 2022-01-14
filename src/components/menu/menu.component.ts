
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

  formIndex: Array<GridIndex> = [
    // {title: 'Pallet No.', isOpen: false, value: ''},
    // {title: 'C/T No.', isOpen: false, value: ''},
    // {title: 'SKU', isOpen: false, value: ''},
    // {title: 'Description of goods', isOpen: false, value: ''},
    // {title: 'Quantity', isOpen: false, value: ''},
    // {title: 'N/W(Unit)', isOpen: false, value: ''},
    // {title: 'G/W(Unit)', isOpen: false, value: ''},
    // {title: 'Measurement', isOpen: false, value: ''},
  ];

  addedFormIndex:Array<GridIndex> = 
  [
    {title: 'Pallet No.', isOpen: false, value: '1', palletNo:1},
    {title: 'C/T No.', isOpen: false, value: '', palletNo:1},
    {title: 'SKU', isOpen: false, value: '', palletNo:1},
    {title: 'Description of Goods', isOpen: false, value: '', palletNo:1},
    {title: 'Quantity', isOpen: false, value: '', palletNo:1},
    {title: 'N/W(Unit)', isOpen: false, value: '', palletNo:1},
    {title: 'G/W(Unit)', isOpen: false, value: '', palletNo:1},
    // {title: 'Measurement', isOpen: false, value: ''},
  ]

  inputVal:string = '';
  gridIndex:Array<any> = [];


  // gridList:Array<any> = [];

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

  // deleteList(target:any) {
  //   console.log(target);
  // }

  paintGrid() {
    const newListArr:Array<any> = [];
    const newList = this.addedFormIndex.reduce((acc, curr, i) => {
      const newGridIndex = new GridIndex();
      if(curr.title === 'Pallet No.') {
        newGridIndex.value = (this.gridIndex.length + 1).toString();
        newGridIndex.palletNo = this.gridIndex.length + 1;
      } else {
        newGridIndex.palletNo = this.gridIndex.length + 1;
      }
      return newListArr.push(newGridIndex);
    },{});

    console.log(newListArr);

    this.gridIndex.push(newListArr);
  }

  activeOverlay(item: any) {
    if(item.title === "Pallet No.") {
      this.paintGrid();
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

  saveValue(target:any) {
    console.log('save',target);
    const index = this.addedFormIndex.filter(list => list.title === target.title && list.palletNo === target.palletNo);
    index[0].value = this.inputVal; 
    this.activeOverlay(target);
  }

}

export class GridIndex {
  title: string = '';
  isOpen: boolean = false;
  value: string = '';
  palletNo:Number = 0;
}