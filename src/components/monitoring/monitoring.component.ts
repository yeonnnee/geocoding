
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: 'monitoring.component.html',
  styleUrls: ['monitoring.component.scss'],
})
export class MonitoringComponent {
  selectedOceanLine: string = '선사';
  selectedPriority: string = 'TOP';
  priorityOp: string[] = ['TOP', 'GENERAL', 'LOWEST'];
  showOceanLineList: boolean = false;
  showPriorityList: boolean = false;

  constructor() { }

  openOceanLineList() {
    this.showOceanLineList = !this.showOceanLineList;
  }
  openPriorityList() {
    this.showPriorityList = !this.showPriorityList;
  }
}

