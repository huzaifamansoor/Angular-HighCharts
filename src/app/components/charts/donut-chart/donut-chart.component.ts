import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;

  chartOptions =  {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Total Alert Services'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 3
              }
          }
      }
  },
  series: [{
      name: 'Share',
      data: [
          { name: 'New Count', y: 146 / 187, color: 'yellow'},
          { name: 'In Progress', y: 20 / 187, color: 'blue' },
          { name: 'Closed within Target', y: 21 / 187, color: 'red' }
      ]
  }]
  };

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
