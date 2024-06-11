import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public API_URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  newOrder(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}orders`, data);
  }

  // get order by id user
  getOrderByUserId(id:any) {
    return this.http.get(`${this.API_URL}orders/user/${id}`)
  }

  addOrderItem(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}orderItem`, data);
  }

  getOrderItemsByOrderId(id:string){
    return this.http.get(`${this.API_URL}orderItem/${id}`)
  }

}
