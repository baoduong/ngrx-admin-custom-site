import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MOCKDATA } from './components/charts/call-volumes/callvolumes.mock';

const _MOCKDATA = MOCKDATA.sort((a: any, b: any) => {
  if (new Date(a.time) < new Date(b.time)) {
    return -1;
  }
  return 1;
}).map(data => {
  return Object.assign(data, {
    time: data.time.replace(/ /g, 'T'),
    date: new Date(data.time.replace(/ /g, 'T')).toLocaleDateString()
  });
});


const MOCK_DATA_CALL_VOLUMES = [..._MOCKDATA].reduce((rv, x) => {
  (rv[x['date']] = rv[x['date']] || []).push(x);
  return rv;
}, {});

@Component({
  selector: 'wye-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  callVolumeData = [];

  optionsDate = [];
  selectedDateCallVolume = '';

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    for (const key in MOCK_DATA_CALL_VOLUMES) {
      if (Object.prototype.hasOwnProperty.call(MOCK_DATA_CALL_VOLUMES, key)) {
        const element = MOCK_DATA_CALL_VOLUMES[key];
        const date = new Date((key));
        this.optionsDate.push({
          name: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
          value: key
        });
      }
    }
    this.selectedDateCallVolume = this.optionsDate[0].value;
    this.callVolumeData = MOCK_DATA_CALL_VOLUMES[this.selectedDateCallVolume];
    this.cd.detectChanges();
  }

  onDateCallChange(value) {
    this.selectedDateCallVolume = value;
    this.callVolumeData = MOCK_DATA_CALL_VOLUMES[this.selectedDateCallVolume];
    this.cd.detectChanges();
  }
}
