import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './model.order';
import { Purchased } from './model.purchase';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public http: HttpClient) {}

  getOrdersByUserID(uid: any): Observable<Order[]> {
    return this.http.get<Order[]>(
      'http://localhost:9090/order/getOrderByUserID/' + uid
    );
  }

  // update order status
  updateOrderStatus(updateRef: any): any {
    console.log('updateRef: ' + updateRef);
    this.http
      .put('http://localhost:9090/order/updateOrderStatus', updateRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  getUserpurchased(pid: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> ('http://localhost:9090/user/getUserPurchasedDetails/' + pid);
  }
  getProductpurchased(product: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> ('http://localhost:9090/user/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> ('http://localhost:9090/user/getDatePurchasedDetails/' + date);
  }
}
