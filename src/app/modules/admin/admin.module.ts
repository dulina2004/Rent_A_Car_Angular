import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCarComponent } from './components/update-car/update-car.component';

@NgModule({
  declarations: [AdminDashboardComponent, PostCarComponent, UpdateCarComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
