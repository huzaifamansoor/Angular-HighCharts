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
  // chart Option
  detail = `<span class="chart-content" id="pieChartInfoText"><span class="chart__title"><a class="chart__link">KPI</a></span><span class="chart__score" title="(Count Of Issues Closed Within Target - Count Of Issues Confirmed Unresolved) / Count Of Issues">42.6<small>%</small></span><span class="chart__count">Alert Count</span><a class="chart__link">94</a></span>`;
  chkToggle = false;

  myData = [
    {y: 42, name: 'Closed within Target', color: '#1E90FF'},
    {y: 20, name: 'Closed out of Target', color: '#A9A9A9'},
    {y: 28, name: 'New / In progress', color: '#778899'},
    {y: 4, name: 'Late', color: '696969'}];


  chartOptions =  {
    chart: {
        height: 250,
        margin: [0, 0, 0, 0]
    },
    exporting: {
        enabled: false
    },
    title: {
        useHTML: true,
        text: this.detail,
        verticalAlign: 'middle',
        floating: false,
        size: '100%',
        align: 'center',
        y: -40,
    },

    credits: {
        enabled: false
    },
    tooltip: {
        enabled: true,
        useHTML: true,
        zindex: 9999,
        formatter: function () {
            return '<div class="tooltip" style="z-index:99999;"> <b>' + this.key + '</b><br> ' + (this.chkToggle ? "<b>Percentage: </b>" : "<b> Count: </b>" + this.y) + '</div>';
        }
    },
    pane: {
        background: [{
            // reflex for supported browsers
            backgroundColor: 'rgba(255,255,255, 0.9)'
        }]
    },
    yAxis: [{
        lineWidth: 0,
        min: 0,
        max: 100,
        minorTickLength: 17,
        tickLength: 0,
        tickWidth: 1,
        minorTickColor: 'white',
        innerRadius: '10%',
        tickInterval: '5',
        softMax: 10,
        labels: {
            enabled: false
        },
        // softMax: 90,
        zIndex: 10,
        title: {
            text: '',
            useHTML: false,
            y: 80
        },
        pane: 0
    }],
    plotOptions: {
        pie: {
            shadow: {
                color: 'rgb(212, 233, 228)',
                offsetX: 0,
                offsetY: 0,
                opacity: 0.02,
                width: 50
            },
            innerSize: 160,
            depth: 45,
            edgeWidth: 5,
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Risk',

        depth: 30,

        innerSize: '70%',

        dataLabels: {
            enabled: false
        },
        // name: '',
        showInLegend: false,
        data: this.myData,
    }, {
        type: 'gauge',
        pivot: {
            radius: 0
        }

    }],
};

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
