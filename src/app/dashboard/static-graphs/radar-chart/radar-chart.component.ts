import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartType: ChartType = 'radar';

  data: ChartData<'radar'> = {
    labels: ['Punctuality', 'Communication', 'Problem Solving',],
    datasets: [
      {
        label: 'data 1',
        data: [350, 450, 100]
      },
      {
        label: 'data 2',
        data: [100, 40, 100]
      },
    ]
  };

}
