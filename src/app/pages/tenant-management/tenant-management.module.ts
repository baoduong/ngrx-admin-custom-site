import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantManagementRoutingModule } from './tenant-management-routing.module';
import { TenantManagementComponent } from './tenant-management.component';
import {
  NbActionsModule, NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule, NbOptionModule, NbSelectModule, NbStepperModule, NbTreeGridModule, NbWindowModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleConfigurationComponent } from './components/module-configuration/module-configuration.component';

@NgModule({
  declarations: [
    TenantManagementComponent,
    TenantDetailComponent,
    ModuleConfigurationComponent
  ],
  imports: [
    NbSelectModule,
    NbWindowModule,
    NbIconModule,
    NbCheckboxModule,
    NbButtonModule,
    NbActionsModule,
    NbStepperModule,
    NbCardModule,
    NbInputModule,
    NbTreeGridModule,
    ThemeModule,
    TenantManagementRoutingModule,
    NgxDatatableModule.forRoot({
      messages: {
        emptyMessage: 'No data to display', // Message to show when array is presented, but contains no values
        totalMessage: 'total', // Footer total message
        selectedMessage: 'selected' // Footer selected message
      }
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TenantManagementModule { }
