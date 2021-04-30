import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './model.order';
import { Purchased } from './model.purchase';


@Injectable({
  providedIn: 'root',
})
export class OrderService {
  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) {}

  getOrdersByUserID(uid: any): Observable<Order[]> {
    return this.http.get<Order[]>(
      this.ipAddress+'/order/getOrdersByUserID/' + uid
    );
  }
  getAllOrders():Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/getAllOrders");
  }
  // update order status
  updateOrderStatus(updateRef: any): any {
    console.log('updateRef: ' + updateRef);
    this.http
      .put(this.ipAddress+'/order/updateOrderStatus', updateRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  getUserpurchased(id: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> (this.ipAddress+'/getUserPurchasedDetails/' + id);
  }
  getProductpurchased(product: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> (this.ipAddress+'/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> (this.ipAddress+'/getDatePurchasedDetails/' + date);
  }
  getDatesPurchased(date: any, date2: any): Observable<Purchased[]> {
    return this.http.get<Purchased[]> (this.ipAddress+'/twoDatesPurchased/' + date + '/' + date2);
  }
}
