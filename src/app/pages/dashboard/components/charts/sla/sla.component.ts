import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SLAModel } from '../../../../../@core/models/sla-chart.model';
import { IPieChart } from '../IPieChart';

@Component({
  selector: 'wye-sla-chart',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlaComponent implements OnInit {
  data: SLAModel;
  CharData: IPieChart[] = [];
  colorScheme = { domain: [] };
  constructor() {
    this.data = {
      dailyAnswered: Math.random(),
      dailyAbandoned: Math.random(),
      mtdAnswered: Math.random(),
      mtdAbandoned: Math.random(),
      wtdAnswered: Math.random(),
      wtdAbandoned: Math.random(),
      inboundPicked: Math.random(),
    };
  }

  ngOnInit(): void {
    for (const key in this.data) {
      if (Object.prototype.hasOwnProperty.call(this.data, key)) {
        this.CharData.push({
          name: key,
          value: this.data[key]
        });
        this.colorScheme.domain.push(stringToColour(key));
      }
    }
  }

}
const stringToColour = function (str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};
