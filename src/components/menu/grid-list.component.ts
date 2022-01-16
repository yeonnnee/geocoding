import { Component, Input, Output,EventEmitter } from "@angular/core";


@Component({
  selector: 'grid-list',
  templateUrl: 'grid-list.component.html',
  styleUrls: ['grid-list.component.scss'],
})

export class GridListComponent {

  @Input() gridList:Array<any> = [];
  @Output() deleteList: EventEmitter<any> = new EventEmitter()
  @Output() addList: EventEmitter<any> = new EventEmitter()
  constructor() {}

  // deleteColumn(target:any) {
  //   this.deleteList.emit(target);
  // }

  activeOverlay(item: any) {
    if(item.title === "Pallet No.") {
      // this.paintGrid();
      return;
    }
    item.isOpen = !item.isOpen;

    // this.addedFormIndex.forEach(doneItem => {
    //   if (doneItem !== item) {
    //     doneItem.isOpen = false;
    //   }
    // });
  }

  setValue(e:any) {
    console.log(e.target.value)
  }

  saveValue(item:any) {
    console.log(item)
  }
  addRow(item:any) {
    this.addList.emit(item);
  }

  deleteRow(item: any) {
    this.deleteList.emit(item);
  }
}