import { Component, Input, Output,EventEmitter, SimpleChanges } from "@angular/core";


@Component({
  selector: 'grid-list',
  templateUrl: 'grid-list.component.html',
  styleUrls: ['grid-list.component.scss'],
})

export class GridListComponent {
  gridData: Array<any> = [];
  overlayTarget = {row:0, title:'', column:'', index:0}
  inputVal: string = '';

  @Input() gridList:Array<any> = [];
  @Input() columns:Array<string> = [];
  @Input() category:Array<any> = [];
  @Output() deleteList: EventEmitter<any> = new EventEmitter()
  @Output() addList: EventEmitter<any> = new EventEmitter()
  @Output() confirmVal:EventEmitter<any> = new EventEmitter()
  constructor() {}

  // deleteColumn(target:any) {
  //   this.deleteList.emit(target);
  // }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.gridList || this.columns) {
      this.gridData = this.gridList;
      console.log('change',this.gridData)
    }
    
    console.log(this.columns)
  }
  activeOverlay(row:any, item: any,index:number) {
    if(item === "palletNo") {
      // this.paintGrid();
      return;
    }

    this.overlayTarget = {
    ...this.overlayTarget,
      row: row,
      column: item,
      index:index
    }
    this.category.reduce((acc, curr, index) => {
      if (curr.key === item) {
        this.overlayTarget.title = curr.title;
      }
      return curr;
    },{})
  }

  closeOverlay() {
    this.overlayTarget = {row:0, title:'', column:'', index:0}
  }

  setValue(e:any) {
    console.log('asdf',e.target.value)
    this.inputVal = e.target.value;
  }

  saveValue(item:any,column:any, index:number) {
    console.log(item)
    const target = {
      row: item,
      column: column,
      value: this.inputVal,
      index:index
    }
    this.confirmVal.emit(target)
    this.overlayTarget = {row:0, title:'', column:'', index:0}
    
  }
  addRow(item:any) {
    this.addList.emit(item);
  }

  deleteRow(item: any) {
    this.deleteList.emit(item);
  }
}