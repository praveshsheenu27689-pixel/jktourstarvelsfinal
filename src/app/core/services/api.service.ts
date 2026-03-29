import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  submitBooking(data: any): Observable<any> {
    return this.http.post(`${this.base}/bookings`, data);
  }

  submitContact(data: any): Observable<any> {
    return this.http.post(`${this.base}/contact`, data);
  }
}
