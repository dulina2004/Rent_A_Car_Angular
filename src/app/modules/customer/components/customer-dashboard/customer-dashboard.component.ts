import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  cars: any = [];

  constructor(
    private customerService: CustomerService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCars();
    console.log(this.cars);
  }

  getAllCars() {
    this.customerService.getAllCars().subscribe((res: any[]) => {
      // res is typed as any[]
      console.log(res);
      res.forEach((element: any) => {
        // element typed as any
        element.processedImg =
          'data:image/jpeg;base64,' + element.returnedImage;
        this.cars.push(element);
      });
    });
  }
}
