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
  chartOptions =  {
    colorAxis: {
      minColor: '#FFFFF1',
      maxColor: Highcharts.getOptions().colors[0]
  },
  series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: [{
          name: 'Central',
          value: 3,
          colorValue: 1
      }, {
          name: 'Qubec',
          value: 2,
          colorValue: 2
      }, {
          name: 'pacific',
          value: 4,
          colorValue: 3
      }, {
          name: 'Prairie',
          value: 3,
          colorValue: 4
      }, {
          name: 'Atlantic',
          value: 2,
          colorValue: 5
      }]
  }],
  title: {
      text: 'Heat Map'
  }
  };

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
