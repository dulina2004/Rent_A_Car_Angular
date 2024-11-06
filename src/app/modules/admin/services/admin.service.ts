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

  createAuthorizationHeader(): HttpHeaders {
    let authHeadeaders: HttpHeaders = new HttpHeaders();
    return authHeadeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}
