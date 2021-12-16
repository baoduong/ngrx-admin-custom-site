import {
  Component, OnInit, ChangeDetectionStrategy, Input,
  AfterViewInit, ElementRef, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { IPieChart } from '../IPieChart';

@Component({
  selector: 'wye-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent implements OnInit, AfterViewInit {

  @Input() CharData: IPieChart[] = [];
  @Input() gradient = false;
  @Input() colorScheme = { domain: [] };
  showChart = false;
  size = [0];

  @ViewChild('containerChart') containerChart: ElementRef;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const width = this.containerChart.nativeElement.offsetWidth;
    this.size = [width];
    this.showChart = true;
    this.cd.detectChanges();
  }
}
