import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  storeTicketinfo(data: any): void{
    this.http.post('http://localhost:9090/ticket', data, {responseType: 'text'}).subscribe(
      result => console.log(result), error => console.log(error));
  }
  storeUserDetailsInfo(productRef: any): void{
    this.http.post('http://localhost:9090/signUp', productRef, {responseType: 'text'}).
    subscribe(result => console.log(result), error => console.log(error));
  }

  selectAllitems():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/select");
  }

  AddtoCart(product:any) {
   this.http.post('http://localhost:9090/select',product,{responseType:'text'}).subscribe(result => console.log(result), error => console.log(error));
  }
}
