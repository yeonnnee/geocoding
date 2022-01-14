import { Component, Input, Output,EventEmitter } from "@angular/core";


@Component({
  selector: 'grid-list',
  templateUrl: 'grid-list.component.html',
  styleUrls: ['grid-list.component.scss'],
})

export class GridListComponent {

  @Input() gridList:Array<any> = [];
  @Output() deleteList:EventEmitter<any> = new EventEmitter()
  constructor() {}

  // deleteColumn(target:any) {
  //   this.deleteList.emit(target);
  // }
}