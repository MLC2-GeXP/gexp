import {Component, OnInit} from "@angular/core";
import {Message} from "primeng/components/common/api";
import {DataService} from "../data-form/data-form.service";
/**
 * Created by calin.crist on 15/01/2017.
 */

@Component({
    selector: 'gexp-line-chart',
    moduleId: module.id,
    templateUrl: 'line-chart.component.html'
})

export class LineChartComponent implements OnInit {

  data: any;

  msgs: Message[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    // this._dataService.

    this.data = {
      labels: ['1960', '1970', '1980', '1990', '2000', '2010', '2020','1960', '1970', '1980', '1990', '2000', '2010', '2020'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#515151'
        },
        {
          label: 'Second Dataset',
          data: [28, 18, 10, 19, 16, 27, 90],
          fill: false,
          borderColor: '#265459'
        },
        {
          label: 'Second Dataset',
          data: [8, 38, 42, 29, 26, 27, 90],
          fill: false,
          borderColor: '#115151'
        }
      ]
    }
  }
  selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
}
