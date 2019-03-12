import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.css']
})
export class GaugeChartComponent implements OnInit {

  Highcharts = Highcharts;
  chartConstructor = 'chart';
  updateFlag = false;
  oneToOneFlag = true;
  runOutsideAngular = false;

  // Chart Components
  text = 'Purchase - Alert Resolution (%)';
  minVal = 0;
  target = '0';
  commitment = '0';
  maxVal = 100;
  actual = 42.9;

  fullTitle = this.text ;
  KPIEmpty = false;
  // container = $(this);
  dailColor = '#ffc52a';

  titleText = this.text;


  chartOptions = {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    pane: [{
        startAngle: -180,
        endAngle: 180,
        background: [{
            backgroundColor: '#2c292a',
            borderWidth: 15,
            borderColor: '#e6e6e6',
            outerRadius: '116%'
        }],
    }],
    plotOptions: {
        gauge: {
            borderWidth: 100,

            pivot: {
                radius: 0
            },
            dial: {
                radius: '100%',
                backgroundColor: '#4edd9e',
                baseWidth: 3,
                topWidth: 3,
                rearLength: '-77%'
            }
        }
    },
    title: {
        useHTML: true,
        text: this.titleText,
        align: 'center',
        verticalAlign: 'top',
        y: 73,
        style: {
            fontSize: '11px',
            fontFamily: 'open sans',
            fontWeight: '600',
            color: 'white',
            width: '20%',
            lineHeight: '15px',
            textAlign: 'center'
        }
    },
    subtitle: {
        text: this.KPIEmpty === true ? '-' : Highcharts.numberFormat(this.actual, 1),
        align: 'center',
        verticalAlign: 'top',
        y: 120,
        style: {
            fontSize: '32px',
            fontFamily: 'open sans',
            fontWeight: '700',
            color: 'white',
            width: '20%',

        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    // the value axis
    yAxis: {
        min: this.minVal,
        max: this.maxVal,
        gridLineColor: 'black',
        minorTickInterval: 'auto',
        minorTickWidth: 1.3,
        minorTickLength: 12,
        minorTickPosition: 'inside',
        minorTickColor: this.dailColor,
        tickPixelInterval: 20,
        lineColor: 'transparent',
        tickWidth: 0,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: 'white',
        plotBands: [{
            from: this.minVal,
            to: this.maxVal,
            color: '#fff',
            outerRadius: '76%',
            thickness: '2%',

        }],
        labels: {
            step: 10,
            enabled: false,
            rotation: 'auto'
        }
    },
    tooltip: {
        //useHTML:true,
        borderWidth: 0,
        backgroundColor: "rgba(255,255,255,0)",
        borderRadius: 0,
        shadow: false,
        useHTML: true,
        //percentageDecimals: 2,
        // backgroundColor: "rgba(255,255,255,1)",
        formatter: function () {
            return '<span style=" color:' + this.series.color + '">\u25CF</span> ' + (this.series.name === this.text ? this.fullTitle : this.series.name) + ' : <b>' + (this.series.name === this.text ? this.actual : this.target) + '</b>';
        }
    },
    series: [{
        name: this.text,
        data: [{
            y: isNaN(this.actual) ? '0' : this.actual
        }, ],
        color: '#4edd9e',
        visible: this.KPIEmpty ? false : true,


        dataLabels: {
            enabled: false,
        }
    }, {
        name: this.text,
        data: [{
            y: Number(this.target),

        }, ],
        id: 'Target',
        // name: 'Target',
        color: '#0f7d4c',
        dial: {
            radius: '85%',
            backgroundColor: '#0f7d4c',
            borderColor: '#0f7d4c',
            borderWidth: 1,
            baseWidth: 12,
            topWidth: 1,
            baseLength: '80%'
        },
        dataLabels: {
            enabled: false,
        }
    }, ]

}

  chartCallback = (chart) => {};
  constructor() { }

  ngOnInit() {
  }

}
