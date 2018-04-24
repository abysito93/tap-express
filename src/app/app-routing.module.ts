import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { PastaComponent } from './pasta/pasta.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'lunch', component: LunchComponent },
  { path: 'breakfast', component: BreakfastComponent },
  { path: 'pasta', component: PastaComponent },
  { path: 'sandwich', component: SandwichComponent },
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
