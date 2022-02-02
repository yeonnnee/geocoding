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
  openGridControl : {row: number|null, index: number|null} = {row: null, index: null}
  @Input() gridList:Array<any> = [];
  @Input() columns:Array<string> = [];
  @Input() category:Array<any> = [];
  @Output() deleteList: EventEmitter<any> = new EventEmitter()
  @Output() addList: EventEmitter<any> = new EventEmitter()
  @Output() confirmVal:EventEmitter<any> = new EventEmitter()
  @Output() paintGridAgain:EventEmitter<any> = new EventEmitter()
  @Output() disabledGridCol:EventEmitter<any> = new EventEmitter()

  constructor() {}

  paintGrid() {
    this.paintGridAgain.emit();
  }
  // deleteColumn(target:any) {
  //   this.deleteList.emit(target);
  // }
  openOtpion(rowNum: number, j: number) {
    console.log('rew', rowNum)
    this.openGridControl = {row: rowNum, index: j}
  }
  closeOption() {
    this.openGridControl =  {row: null, index: null}
  }
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

  saveValue(item:number,column:string, index:number) {
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

  deleteRow(row: any, index: number) {
    const target = {
      row: row,
      index:index
    }
    console.log('del',this.gridData)
    this.openGridControl = { row: null, index: null };
    this.deleteList.emit(target);
  }
  disableGridCol(item:any) {
    this.disabledGridCol.emit(item);
  }


}