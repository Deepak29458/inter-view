import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartType: ChartType = 'line';

  data: ChartData<'line'> = {
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
