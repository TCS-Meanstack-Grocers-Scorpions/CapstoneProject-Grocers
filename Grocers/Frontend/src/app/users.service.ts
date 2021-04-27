import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model.user';
import { Product } from './model.product';

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

  updateUserPassword(userRef: any, id: any) {
    this.http.put(
      'http://localhost:9090/user/updateUserPassword' + id,
      userRef,
      { responseType: 'text' }
    );
  }
  updateUserEmail(userRef: any, id: any) {
    this.http.put('http://localhost:9090/user/updateUserEmail' + id, userRef, {
      responseType: 'text',
    });
  }
  updateUserAddress(userRef: any, id: any) {
    this.http.put(
      'http://localhost:9090/user/updateUserAddress' + id,
      userRef,
      { responseType: 'text' }
    );
  }
  updateUserPhone(userRef: any, id: any) {
    this.http.put('http://localhost:9090/user/updateUserPhone' + id, userRef, {
      responseType: 'text',
    });
  }
  updateUserDOB(userRef: any, id: any) {
    this.http.put('http://localhost:9090/user/updateUserDOB' + id, userRef, {
      responseType: 'text',
    });
  }
  updateFunds(userRef: any, id: any) {
    this.http.put('http://localhost:9090/user/updateUserFunds' + id, userRef, {
      responseType: 'text',
    });
  }
  updateUserById(userRef: any): void {
    this.http.put('http://localhost:9090/user/updateUserInfo', userRef, {
      responseType: 'text',
    });
  }

  storeTicketinfo(data: any): void {
    this.http
      .post('http://localhost:9090/ticket', data, { responseType: 'text' })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  storeUserDetailsInfo(productRef: any): void {
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
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }

  selectAllitems(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:9090/select');
  }

  AddtoCart(product: any): void {
    this.http
      .post('http://localhost:9090/select', product, { responseType: 'text' })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  viewCartitems(userId: any): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:9090/cart/' + userId);
  }
  updateCart(cartRef: any): void {
    this.http
      .put('http://localhost:9090/cart', cartRef, { responseType: 'text' })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  deleteItem(cartRef: any): void {
    this.http
      .delete('http://localhost:9090/cart/' + cartRef, { responseType: 'text' })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
}
