import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css'],
})
export class SearchCarComponent {
  searchCarForm!: FormGroup;
  cars: any = [];
  listOfBrands = [
    'BMW',
    'AUDI',
    'FERRARI',
    'TESLA',
    'VOLVO',
    'HONDA',
    'FORD',
    'TOYOTA',
    'NISSAN',
    'HYUNDAI',
    'LEXUS',
    'KIA',
  ];

  listOfType = ['Petrol', 'Hybrid', 'Diesel', 'Electric'];

  listOfColor = ['Red', 'White', 'Blue', 'Black', 'Orange', 'Grey', 'Silver'];

  listOfTransmission = ['Manual', 'Auto'];

  constructor(private fb: FormBuilder, private adminService: AdminService) {
    this.searchCarForm = fb.group({
      brand: [null],
      type: [null],
      transmission: [null],
      colour: [null],
    });
  }

  searchCar() {
    this.cars = [];

    console.log(this.searchCarForm.value);
    this.adminService
      .searchCar(this.searchCarForm.value)
      .subscribe((res: any) => {
        console.log(res);
        // for (let element of res.carList) {
        //   element.processedImg =
        //     'data:image/jpeg;base64,' + element.returnedImage;
        //   this.cars.push(element);
        // }
        res.carDtoList.forEach((element: any) => {
          element.processedImg =
            'data:image/jpeg;base64,' + element.returnedImage;
          this.cars.push(element);
        });
        // Populate the car list with the returned data
      });
  }
}
