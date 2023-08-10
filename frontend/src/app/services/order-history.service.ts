import { Injectable } from '@angular/core';
import { OrderItem } from '../common/orderItem';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Orders } from '../common/orders';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  private baseUrl = `${environment.apiUrl}`;
  constructor(private httpClient: HttpClient) {}
  getOrderList(): Observable<Orders[]> {
    const storedAuthData = localStorage.getItem('authData');
    const authData = JSON.parse(storedAuthData!);
    console.log(authData);
    const params = new HttpParams().set('email', authData._email);

    return this.httpClient.get<Orders[]>(this.baseUrl + 'orderHistory', {
      params,
    });
  }
}
