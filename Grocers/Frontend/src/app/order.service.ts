import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(public http: HttpClient) {}

  getOrderByUserID() {}

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
}
