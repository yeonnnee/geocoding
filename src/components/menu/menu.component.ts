
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

  formIndex: Array<GridIndex> = [];

  addedFormIndex:Array<GridIndex> = 
  [
    {title: 'Pallet No.', isOpen: false, value: '0', palletNo:0},
    {title: 'C/T No.', isOpen: false, value: '', palletNo:0},
    {title: 'SKU', isOpen: false, value: '', palletNo:0},
    {title: 'Description of Goods', isOpen: false, value: '', palletNo:0},
    {title: 'Quantity', isOpen: false, value: '', palletNo:0},
    {title: 'N/W(Unit)', isOpen: false, value: '', palletNo:0},
    {title: 'G/W(Unit)', isOpen: false, value: '', palletNo:0},
  ]

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
  }


  paintGrid() {
    const newListArr:Array<any> = [];
    
    this.addedFormIndex.reduce((acc, curr, i) => {

      const newGridIndex = new GridIndex();
      if(curr.title === 'Pallet No.') {
        newGridIndex.value = (this.currPalletNo + 1).toString();
        newGridIndex.palletNo = this.currPalletNo + 1;
        this.currPalletNo = this.currPalletNo + 1;

      } else {
        newGridIndex.palletNo = this.currPalletNo;
      }

      newGridIndex.title = curr.title;
      return newListArr.push(newGridIndex);
    },{});

    console.log(newListArr);
    this.gridIndex.push(newListArr);
  }

  addSubList(target:any) {
    console.log('addList', target);

    const newListArr:Array<any> = [];
    this.addedFormIndex.reduce((acc, curr, i) => {
      const newGridIndex = new GridIndex();
      if(curr.title === 'Pallet No.') {
        newGridIndex.value = target.value;
        newGridIndex.palletNo = target.palletNo;
      } else {
        newGridIndex.palletNo = target.palletNo;
      }
      return newListArr.push(newGridIndex);
    },{});

    this.gridIndex.push(newListArr);
  }

  deleteList(target: any) {
    console.log('del', target);
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

    this.activeOverlay(target);
  }

}

export class GridIndex {
  title: string = '';
  isOpen: boolean = false;
  value: string = '';
  palletNo:Number = 0;
}