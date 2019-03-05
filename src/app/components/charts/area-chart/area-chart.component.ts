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

  // chart Options
  xCategories = [
    '[Mar 18]',
    '[Apr 18]',
    '[May 18]',
    '[Jun 18]',
    '[Jul 18]',
    '[Aug 18]',
    '[Sep 18]',
    '[Oct 18]',
    '[Nov 18]',
    '[Dec 18]',
    '[Jan 19]',
    '[Feb 19]',
    '[Mar 19]'];
  tooltip = '';

  series = [
    {
       name: 'National',
       showInLegend: true,
       marker: {
          symbol: 'square',
          radius: 4,
          lineColor: '#666666',
          backgroundColor: 'white',
          lineWidth: 1
       },
       dataLabels: {
          enabled: false
       },
       point: {
          events: {}
       },
       color: {
          linearGradient: {
             x1: 0,
             y1: 0,
             x2: 1,
             y2: 0
          },
          stops: [
             [
                0,
                "rgb(201, 54, 199)"
             ],
             [
                1,
                "rgb(277, 80, 146)"
             ]
          ]
       },
       data: [
          0,
          0,
          0,
          0,
          0,
          0,
          82,
          0,
          0,
          0,
          0,
          0,
          82
       ]
    }
 ];

  chartOptions =  {
    chart: {
      type: 'spline'
  },
  title: {
      text: ''
  },
  credits: { enabled: false },
  exporting: { enabled: false },
  xAxis: {
      categories: this.xCategories
  },
  yAxis: {
      title: {
          text: ''
      },
      min: -100,
      max: 100 // this.max
  },
  tooltip: {
      shared: true,
      formatter: function () {
          this.points.forEach((point) => {
              this.tooltip += '<b>' + point.series.name + '</b>: ' + Highcharts.numberFormat(point.y,1) + '<br/>';
          });
          return '<text>' + this.tooltip + '</text>';
        }
  },
  plotOptions: {
      spline: {
          dataLabels: {
              enabled: true
          }
      }
  },
  series: this.series,
  };

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
