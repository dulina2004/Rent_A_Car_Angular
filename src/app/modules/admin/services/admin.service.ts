import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASE_URL = ['http://localhost:8080'];
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  postcar(carDto: any): Observable<any> {
    // let x = this.http.post(`${BASE_URL}/api/admin/car`, carDto, {
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   // },

    //   headers: this.createAuthorizationHeader(),
    // });

    return this.http.post(`${BASE_URL}/api/admin/car`, carDto, {
      // headers: {
      //   'Content-Type': 'application/json',
      // },

      headers: this.createAuthorizationHeader(),
    });
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${BASE_URL}/api/admin/cars`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCarBookings(): Observable<any> {
    return this.http.get(`${BASE_URL}/api/admin/car/bookings`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/api/admin/car/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  updateCar(carId: Number, carDto: any): Observable<any> {
    return this.http.put(`${BASE_URL}/api/admin/car/${carId}`, carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/api/admin/car/${id}`);
  }
  changeBookingStatus(bookingId: number, status: string): Observable<any> {
    return this.http.get(
      `${BASE_URL}/api/admin/car/booking/${bookingId}/${status}`,
      {
        headers: this.createAuthorizationHeader(),
      }
    );
  }

  searchCar(searchCarDto: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/admin/car/search`, searchCarDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  createAuthorizationHeader(): HttpHeaders {
    let authHeadeaders: HttpHeaders = new HttpHeaders();
    return authHeadeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
