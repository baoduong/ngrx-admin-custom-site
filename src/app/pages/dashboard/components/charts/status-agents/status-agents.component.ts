import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AgentPresenceStatsModel } from '../../../../../@core/models/agentPresenceStats.model';
import { IPieChart } from '../IPieChart';


@Component({
  selector: 'wye-status-agents-chart',
  templateUrl: './status-agents.component.html',
  styleUrls: ['./status-agents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusAgentsComponent implements OnInit {
  data: AgentPresenceStatsModel;
  CharData: IPieChart[] = [];
  colorScheme = { domain: [] };
  constructor(private cd: ChangeDetectorRef) {
    this.data = {
      offline: Math.floor(Math.random() * 100),
      available: Math.floor(Math.random() * 100),
      break: Math.floor(Math.random() * 100),
      inboud: Math.floor(Math.random() * 100),
      outbound: Math.floor(Math.random() * 100)
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
