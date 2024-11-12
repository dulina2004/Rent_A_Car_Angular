import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerHeaderComponent } from './components/customer-header/customer-header.component';
import { BookVehicleComponent } from './components/book-vehicle/book-vehicle.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component';

@NgModule({
  declarations: [CustomerDashboardComponent, BookVehicleComponent, MyBookingsComponent, SearchCarComponent],
  imports: [CommonModule, CustomerRoutingModule, ReactiveFormsModule],
})
export class CustomerModule {}
