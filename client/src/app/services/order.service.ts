import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl, order);
  }

  getUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/my`);
  }
}
