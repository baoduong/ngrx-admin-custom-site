import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantDetailComponent } from './components/tenant-detail/tenant-detail.component';
import { TenantResolver } from './resolver/tenant.resolver';
import { TenantManagementComponent } from './tenant-management.component';

const routes: Routes = [{
  path: '', component: TenantManagementComponent,
}, {
  path: 'detail',
  component: TenantDetailComponent
},
{
  path: 'detail/:id',
  component: TenantDetailComponent,
  resolve: {
    data: TenantResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantManagementRoutingModule { }
