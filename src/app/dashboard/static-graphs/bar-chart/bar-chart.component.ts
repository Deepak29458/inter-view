import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartType: ChartType = 'bar';

  data: ChartData<'bar'> = {
    labels: ['one', 'two', 'three','four'],
    datasets: [
      {
        label: 'data 1',
        data: [350, 450, 100]
      },
      {
        label: 'data 2',
        data: [100, 250, 50]
      }
    ]
  };

}
