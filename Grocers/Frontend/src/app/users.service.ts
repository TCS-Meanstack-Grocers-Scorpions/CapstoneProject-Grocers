import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartProduct } from './model.cart';
import { Product } from './model.product';
import { User } from './model.user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public http: HttpClient) {}

  getUserByID(id: any): Observable<User[]> {
    return this.http.get<User[]>(
      'http://localhost:9090/user/getUserByID/' + id
    );
  }
  getUserDetails(email: any): Observable<User[]> {
    return this.http.get<User[]>(
      'http://localhost:9090/getUserDetails/' + email
    );
  }

  getTickets(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/getRaisedTickets');
  }

  resolveTicket(ticketId: string): void {
    console.log('resolveTicket in SVC fired: ' + String(ticketId));
    this.http
      .put('http://localhost:9090/resolveRaisedTickets', ticketId, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => console.log(error)
      );
  }

  updateUserPassword(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserPassword/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateUserEmail(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserEmail/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateUserAddress(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserAddress/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateUserPhone(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserPhone/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateUserDOB(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserDOB/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateFunds(userRef: any, id: any): void {
    this.http
      .put('http://localhost:9090/user/updateUserFunds/' + id, userRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }

  storeTicketinfo(data: any): void {
    // tslint:disable-next-line:max-line-length
    this.http
      .post('http://localhost:9090/ticket', data, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  storeUserDetailsInfo(productRef: any): void {
    // tslint:disable-next-line:max-line-length
    this.http
      .post('http://localhost:9090/signUp', productRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  retrieveUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9090/getUserById/' + id);
  }

  selectAllitems(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:9090/select');
  }

  AddtoCart(product: any): void {
    // tslint:disable-next-line:max-line-length
    this.http
      .post('http://localhost:9090/select', product, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  viewCartitems(userId: any): Observable<cartProduct[]> {
    return this.http.get<cartProduct[]>('http://localhost:9090/cart/' + userId);
  }
  updateCart(cartRef: any): void {
    this.http
      .put('http://localhost:9090/cart', cartRef, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  deleteItem(cartRef: any): void {
    this.http
      .delete('http://localhost:9090/cart/' + cartRef, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  Purchaseitems(list: any): void {
    this.http
      .post('http://localhost:9090/cart', list, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }

  lockUser(userRef: any): any {
    return this.http.put('http://localhost:9090/lockUser/', userRef, {
      responseType: 'text',
    });
  }

  unlockUser(unlockRef: any): any {
    console.log('unlockUser Service called');
    return this.http
      .put('http://localhost:9090/unlockUsers/', unlockRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          console.log(result);
        },
        (error) => console.log(error)
      );
  }

  changeFunds(userInfo: any): any {
    this.http
      .post('http://localhost:9090/changeFunds', userInfo, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  updateProductQuantity(prod: any): any {
    this.http
      .post('http://localhost:9090/updateQuantity', prod, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  addPurchasedItem(item: any, userId: any): any {
    this.http
      .post('http://localhost:9090/addPurchased/' + userId, item, {
        responseType: 'text',
      })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
}
