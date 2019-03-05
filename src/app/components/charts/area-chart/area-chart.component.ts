import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);


@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;
  chartOptions =  {
    chart: {
      type: 'area'
  },
  title: {
      text: 'Area Chart'
  },
  subtitle: {
      text: ''
  },
  xAxis: {
      categories: ['1', '2', '3', '4', '5', '6', '7'],
      tickmarkPlacement: 'on',
      title: {
          enabled: false
      }
  },
  yAxis: {
      title: {
          text: 'Y-Axis'
      },
      labels: {
          formatter: function () {
              return this.value / 1000;
          }
      }
  },
  tooltip: {
      split: true,
      valueSuffix: ' A-Axis'
  },
  plotOptions: {
      area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
              lineWidth: 1,
              lineColor: '#666666'
          }
      }
  },
  series: [{
      name: 'Point',
      data: [163, 203, 276, 408, 547, 729, 628]
  }]
  };

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
