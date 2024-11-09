import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.css'],
})
export class GetBookingsComponent {
  bookings: any;
  constructor(private service: AdminService) {
    this.getBookings();
  }

  getBookings() {
    this.service.getCarBookings().subscribe((res) => {
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
      console.log(this.bookings);
    });
  }

  changeBookingStatus(id: number, status: string) {
    console.log(id, status);

    this.service.changeBookingStatus(id, status).subscribe({
      next: (res) => {
        console.log(res);

        this.getBookings();
      },
      error: (err) => {},
    });
  }
}
