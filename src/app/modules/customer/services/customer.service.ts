import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';

const BASE_URL = ['http://localhost:8080'];
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  postcar(carDto: any): Observable<any> {
    return this.http.post(`${BASE_URL}/api/cutomer/car`, carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getAllCars(): Observable<any> {
    return this.http.get(`${BASE_URL}/api/customer/cars`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getCarById(id: number): Observable<any> {
    return this.http.get(`${BASE_URL}/api/customer/car/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  updateCar(carId: Number, carDto: any): Observable<any> {
    return this.http.put(`${BASE_URL}/api/customer/car/${carId}`, carDto, {
      headers: this.createAuthorizationHeader(),
    });
  }
  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/api/customer/car/${id}`);
  }
  createAuthorizationHeader(): HttpHeaders {
    let authHeadeaders: HttpHeaders = new HttpHeaders();
    return authHeadeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
