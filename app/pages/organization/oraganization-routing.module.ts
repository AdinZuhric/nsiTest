import { CustomersDetailsComponent } from './CustomerDetails/CustomersDetailsComponent';
import { CustomersListComponent } from './CustomersList/customersListComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '../../core/services/i18n.service';

const routes: Routes = [
  { path: '', component: CustomersListComponent, data: { title: extract('Customers') } },
  { path: 'name', component: CustomersDetailsComponent, data: { title: extract('Name')}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
