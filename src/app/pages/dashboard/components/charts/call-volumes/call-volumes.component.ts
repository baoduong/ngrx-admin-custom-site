/**
 * EChart configuration:
 * https://echarts.apache.org/v4/en/option.html#xAxis.splitArea.areaStyle.color
 */
import {
  Component, OnInit,
  AfterViewInit, OnDestroy, ChangeDetectorRef, Input, OnChanges
} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'wye-call-volumes-chart',
  templateUrl: './call-volumes.component.html',
  styleUrls: ['./call-volumes.component.scss'],
})
export class CallVolumesComponent implements OnInit, OnDestroy, OnChanges {
  themeSubscription: any;
  @Input() RawData = [];
  chartOptions = {};
  colors: any;
  data; echarts: any;

  constructor(private theme: NbThemeService, private cd: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
      this.echarts = config.variables.echarts;
    });
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  ngOnChanges() {
    this.data = this.RawData.map(data => {
      return [new Date(data.time).toLocaleTimeString('en-US', { hour12: false }), data.volume];
    });
    this.chartOptions = {
      backgroundColor: this.echarts.bg,
      color: [this.colors.success],
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: [],
        textStyle: {
          color: this.echarts.textColor,
        },
      },
      grid: {
        top: 50,
        bottom: 40,
      },
      xAxis:
      {
        boundaryGap: false,
        type: 'category',
        axisTick: {
          alignWithLabel: this.colors.info,
        },
        splitLine: {
          lineStyle: {
            color: this.echarts.splitLineColor,
          },
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: this.colors.info,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.echarts.textColor,
          },
        },
        axisPointer: {
          label: {
            formatter: params => {
              return (
                params.value
              );
            },
          },
        },

      },
      yAxis:
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: this.colors.info,
          },
          onZero: false
        },
        splitLine: {
          lineStyle: {
            color: this.echarts.splitLineColor,
          },
        },
        axisLabel: {
          textStyle: {
            color: this.echarts.textColor,
          },
        },
      },

      series:
      {
        lineStyle: {
          width: 2
        },
        areaStyle: {
          color: 'rgba(0, 214, 143,0.3)',
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10
        },
        type: 'line',
        // smooth: true,
        data: this.data
      },

    };

  }
}


