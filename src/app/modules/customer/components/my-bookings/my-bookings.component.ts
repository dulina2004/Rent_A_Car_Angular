import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent {
  bookings: any;

  constructor(private service: CustomerService) {
    this.getMyBookings();
  }

  getMyBookings() {
    this.service.getBookingByUserId().subscribe((res) => {
      console.log(res);

      res.forEach(
        (resElement: {
          fromDate: string | number | Date;
          toDate: string | number | Date;
        }) => {
          resElement.fromDate = new Date(resElement.fromDate)
            .toISOString()
            .split('T')[0];
          resElement.toDate = new Date(resElement.toDate)
            .toISOString()
            .split('T')[0];
        }
      );

      this.bookings = res;
    });
  }
}
