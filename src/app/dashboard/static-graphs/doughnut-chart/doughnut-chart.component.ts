import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartType: ChartType = 'doughnut';

  data: ChartData<'doughnut'> = {
    labels: ['one', 'two', 'three'],
    datasets: [
      {
        label: 'data 1',
        data: [350, 450, 100]
      },
    ]
  };

}
