import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { StatusAgentsComponent } from './components/charts/status-agents/status-agents.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { SlaComponent } from './components/charts/sla/sla.component';
import { CallVolumesComponent } from './components/charts/call-volumes/call-volumes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatusAgentsComponent,
    PieChartComponent,
    SlaComponent,
    CallVolumesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ThemeModule,
    NbCardModule,
    NgxChartsModule,
    NgxEchartsModule
  ]
})
export class DashboardModule { }
