import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  cars: any = [];

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllCars();
    console.log(this.cars);
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe((res: any[]) => {
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

  deleteCar(id: number) {
    this.adminService.deleteCar(id).subscribe({
      next: () => {
        this.getAllCars();
        this.toastr.success('Deleted  successful', '', {
          timeOut: 2500,
          positionClass: 'toast-top-center',
          progressBar: true,
        });
        window.location.reload();
        //this.router.navigateByUrl('/admin/dashboard');
      },
      error: (err) => {
        this.toastr.error('Error Occored', '', {
          timeOut: 2500,
          positionClass: 'toast-top-center',
          progressBar: true,
        });
      },
    });
  }
}
