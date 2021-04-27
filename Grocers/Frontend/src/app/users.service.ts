import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model.user';
import { Product } from './model.product';
import { cartProduct } from './model.cart';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  
  
  getUserByID(id:any):Observable<User[]>{
    return this.http.get<User[]>('http://localhost:9090/user/getUserByID/' + id);
  }
  
  updateUserInfo(userRef:any){
    this.http.put('http://localhost:9090/user/updateUserInfo',userRef,{responseType: 'text'});
  }
  storeTicketinfo(data: any): void{
    this.http.post('http://localhost:9090/ticket', data, {responseType: 'text'}).subscribe(
      result => console.log(result), error => console.log(error));
  }
  storeUserDetailsInfo(productRef: any): void{
    this.http.post('http://localhost:9090/signUp', productRef, {responseType: 'text'}).
    subscribe(result => console.log(result), error => console.log(error));
  }
  retrieveUserById(id: any): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:9090/getUserById/' + id);
 }
 updateUserById(userRef: any): any{
  return this.http.put('http://localhost:9090/updateUserDetails', userRef, {responseType: 'text'});
 }
  selectAllitems():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/select");
  }

  AddtoCart(product:any) {
   this.http.post('http://localhost:9090/select',product,{responseType:'text'}).subscribe(result => console.log(result), error => console.log(error));
  }
  viewCartitems(userId:any):Observable<cartProduct[]>{
    return this.http.get<cartProduct[]>("http://localhost:9090/cart/"+userId);
  }
  updateCart(cartRef:any):void {
 this.http.put("http://localhost:9090/cart",cartRef,{responseType:'text'}).subscribe(
  result => console.log(result), error => console.log(error));
  }
  deleteItem(cartRef:any):void {
this.http.delete("http://localhost:9090/cart/"+cartRef,{responseType:"text"}).subscribe(
  result => console.log(result), error => console.log(error));
  }
  Purchaseitems(list:any):void {
    this.http.post("http://localhost:9090/cart",list,{responseType:"text"}).subscribe(
      result => console.log(result), error => console.log(error))
  }
}
