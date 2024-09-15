import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { OrderTrackingComponent } from './Pages/order-tracking/order-tracking.component';
import { CartComponent } from './Pages/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo: '', pathMatch: 'full'},
  {path:'', component: HomeComponent},
  {path:'order-tracking', component: OrderTrackingComponent},
  {path:'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
