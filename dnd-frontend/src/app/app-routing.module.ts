import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent }, // Create a component for Profile
  // { path: 'products', component: ProductsComponent }, // Create a component for Products Order
  // { path: 'rm-orders', component: RmOrdersComponent }, // Create a component for RM Orders
  // { path: 'raw-materials', component: RawMaterialsComponent }, // Create a component for Raw Materials
  // { path: 'support', component: SupportComponent }, // Create a component for Support
  // { path: 'distributor', component: DistributorComponent }, // Create a component for Distributor
  // { path: 'signout', component: SignoutComponent }, // Create a component for Sign Out
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
