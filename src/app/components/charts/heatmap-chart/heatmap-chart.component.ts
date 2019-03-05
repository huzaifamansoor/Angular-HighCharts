import { Component, OnInit } from '@angular/core';
import * as  Highcharts from 'highcharts';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';
More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);

@Component({
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.css']
})
export class HeatmapChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;

  // chart Option
  data = [44.7, 59.2, 65];
  currentLangId = 'en-CA';
  xCategories = ['Q20', 'Q22', 'Q21'];
  text =  'YOUR LOWEST SCORING QUESTIONS';

  chartOptions =  {
    title: {
      text: this.text,
      style: {
          fontFamily: 'open sans',
          fontSize: '12px'
      }
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b>: ' + (this.currentLangId && this.currentLangId.toLowerCase() == "fr-ca" ? Highcharts.numberFormat(this.y,1).toString().replace(".", ",") : Highcharts.numberFormat(this.y,1) );
      }
  },
  credits:
  {
      enabled: false
  },
  exporting: {
      enabled: false
  },
  plotOptions: {
      column: {
           cursor: 'pointer',
          enableMouseTracking: true,
          dataLabels: {
              enabled: true,
              format: '{y:.1f}'
          }
      }
  },
  xAxis: {
      categories: this.xCategories,
      labels:
          {
              style: {
                  fontFamily: 'open sans',
                  cursor: 'pointer'
              },
              useHTML: true,
              formatter: function()   {

                  return "<div class='AOIq legends--improvement' id='label_"+this.value+"_@chartId'>" +this.value+ "</div>";
              }
          }
  },
  yAxis: {
      enabled:false,
      title: {
          text: ''
      }
  },

  colors: [
      '#27aae1'
  ],
  series: [{
      type: 'column',
      colorByPoint: true,
      borderRadiusTopLeft: 3,
      borderRadiusTopRight: 3,
      data: this.data,
      showInLegend: false
  }]
  };

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
