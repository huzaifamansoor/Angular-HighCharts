import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HighCharts
import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material';
import { GaugeChartComponent } from './components/charts/gauge-chart/gauge-chart.component';
import { AreaChartComponent } from './components/charts/area-chart/area-chart.component';
import { DonutChartComponent } from './components/charts/donut-chart/donut-chart.component';
import { HeatmapChartComponent } from './components/charts/heatmap-chart/heatmap-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GaugeChartComponent,
    AreaChartComponent,
    DonutChartComponent,
    HeatmapChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
