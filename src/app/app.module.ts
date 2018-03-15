import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { PastaComponent } from './pasta/pasta.component';
import { SandwichComponent } from './sandwich/sandwich.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MainCourseService } from './main-course.service';
import { ComplementService } from './complement.service';
import { OrderService } from './order.service';
import { SandwichService } from './sandwich.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    OrderComponent,
    LunchComponent,
    BreakfastComponent,
    PastaComponent,
    SandwichComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [MainCourseService, ComplementService, OrderService, SandwichService],
  bootstrap: [AppComponent]
})
export class AppModule { }
