import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartType: ChartType = 'pie';

  data: ChartData<'pie'> = {
    labels: ['Punctuality', 'Communication', 'Problem Solving',],
    datasets: [
      {
        label: 'data 1',
        data: [30, 50, 20]
      },
    ]
  };

}
