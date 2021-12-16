import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { TenantMockService } from '../../@core/mock/tenant.mock';

interface DataEntry {
  name: string;
  modules: string[];
}

@Component({
  selector: 'wye-tenant-management',
  templateUrl: './tenant-management.component.html',
  styleUrls: ['./tenant-management.component.scss'],
  providers: [TenantMockService]
})
export class TenantManagementComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [{
    prop: 'name',
    name: 'Name'
  },
  {
    name: 'Modules',
    prop: 'modules',
    sortable: false
  },
  {
    name: 'action',
    sortable: false
  }];

  ColumnMode = ColumnMode.flex;
  temp = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  constructor(private tenantService: TenantMockService) {
    this.rows = this.tenantService.data;
    this.temp = [...this.tenantService.data];
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });


    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit(): void {
  }

}
