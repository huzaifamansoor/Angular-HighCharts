import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugeChartComponent } from './components/charts/gauge-chart/gauge-chart.component';
import { AreaChartComponent } from './components/charts/area-chart/area-chart.component';
import { DonutChartComponent } from './components/charts/donut-chart/donut-chart.component';
import { HeatmapChartComponent } from './components/charts/heatmap-chart/heatmap-chart.component';

const routes: Routes = [
  {path: '', component: DonutChartComponent},
  {path: 'gauge', component: GaugeChartComponent},
  {path: 'donut', component: DonutChartComponent},
  {path: 'area', component: AreaChartComponent},
  {path: 'heatmap', component: HeatmapChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
