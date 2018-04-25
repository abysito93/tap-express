import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { OrderComponent } from './components/order/order.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  exports: [
    [RouterModule]
  ],

  imports: [
    RouterModule.forRoot(routes)
  ],
  
  declarations: []
})
export class AppRoutingModule { }
