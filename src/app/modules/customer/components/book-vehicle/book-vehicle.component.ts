import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/auth/services/storage/storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-vehicle',
  templateUrl: './book-vehicle.component.html',
  styleUrls: ['./book-vehicle.component.css'],
})
export class BookVehicleComponent {
  carId: number = this.activatedRoute.snapshot.params['id'];
  processedImage: any;
  car: any;
  ValidateForm!: FormGroup;
  dateFormat: string = 'DD-MM-YYYY';

  constructor(
    private service: CustomerService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.ValidateForm = this.fb.group({
      toDate: [null, [Validators.required]],
      fromDate: [null, [Validators.required]],
    });
    this.getCarById();
  }

  getCarById() {
    this.service.getCarById(this.carId).subscribe((res) => {
      console.log(res);
      this.processedImage = 'data:image/jpeg;base64,' + res.returnedImage;
      this.car = res;
    });
  }

  bookACar(data: any) {
    let bookACar = {
      fromDate: data.fromDate,
      toDate: data.toDate,
      userId: StorageService.getUser().id,
      carId: this.carId,
    };
    console.log(bookACar);
    this.service.bookCar(bookACar).subscribe((res) => {
      console.log(res);
      this.toastr.success('Car addess successful', '', {
        timeOut: 2500,
        positionClass: 'toast-top-center',
        progressBar: true,
      });
      this.router.navigateByUrl('/customer/dashboard');
    });
  }
}
