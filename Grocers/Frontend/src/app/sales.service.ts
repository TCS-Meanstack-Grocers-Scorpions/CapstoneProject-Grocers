import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from './model.sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(public http: HttpClient) { }

  getUserpurchased(id: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/getUserPurchasedDetails/' + id);
  }
  getProductpurchased(product: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/getDatePurchasedDetails/' + date);
  }
  getDatesPurchased(date: any, date2: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/twoDatesPurchased/' + date + '/' + date2);
  }

}


