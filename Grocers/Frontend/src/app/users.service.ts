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
  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) {}

  getUserByID(id: any): Observable<User[]> {
    return this.http.get<User[]>(
      this.ipAddress+'/getUserByID/' + id
    );
  }
  getUserDetails(email: any): Observable<User[]> {
    return this.http.get<User[]>(
      this.ipAddress+'/getUserDetails/' + email
    );
  }

  getTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.ipAddress+'/getRaisedTickets');
  }

  resolveTicket(ticketId: any): any {
    return this.http.delete(
      this.ipAddress+'/resolveRaisedTickets/' + ticketId,
      { responseType: 'text' }
    );
  }

  updateUserPassword(userRef: any, id: any): void {
    this.http
      .put(this.ipAddress+'/updateUserPassword/' + id, userRef, {
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
      .put(this.ipAddress+'/updateUserEmail/' + id, userRef, {
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
      .put(this.ipAddress+'/updateUserAddress/' + id, userRef, {
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
      .put(this.ipAddress+'/updateUserPhone/' + id, userRef, {
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
      .put(this.ipAddress+'/updateUserDOB/' + id, userRef, {
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
      .put(this.ipAddress+'/updateUserFunds/' + id, userRef, {
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
      .post(this.ipAddress+'/ticket', data, { responseType: 'text' })
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
      .post(this.ipAddress+'/signUp', productRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  retrieveUserById(id: any): Observable<User[]> {
    return this.http.get<User[]>(this.ipAddress+'/getUserById/' + id);
  }

  selectAllitems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ipAddress+'/select');
  }

  AddtoCart(product: any): void {
    // tslint:disable-next-line:max-line-length
    this.http
      .post(this.ipAddress+'/select', product, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  viewCartitems(userId: any): Observable<cartProduct[]> {
    return this.http.get<cartProduct[]>(this.ipAddress+'/cart/' + userId);
  }
  updateCart(cartRef: any): void {
    this.http
      .put(this.ipAddress+'/cart', cartRef, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  deleteItem(cartRef: any): void {
    this.http
      .delete(this.ipAddress+'/cart/' + cartRef, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }
  Purchaseitems(list: any): void {
    this.http
      .post(this.ipAddress+'/cart', list, { responseType: 'text' })
      .subscribe(
        (result) => {
          /*console.log(result)*/
        },
        (error) => console.log(error)
      );
  }

  lockUser(userRef: any): any {
    return this.http.put(this.ipAddress+'/lockUser/', userRef, {
      responseType: 'text',
    });
  }

  unlockUser(unlockRef: any): any {
    console.log('unlockUser Service called');
    return this.http
      .put(this.ipAddress+'/unlockUsers/', unlockRef, {
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
      .post(this.ipAddress+'/changeFunds', userInfo, {
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
      .post(this.ipAddress+'/updateQuantity', prod, {
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
      .post(this.ipAddress+'/addPurchased/' + userId, item, {
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
