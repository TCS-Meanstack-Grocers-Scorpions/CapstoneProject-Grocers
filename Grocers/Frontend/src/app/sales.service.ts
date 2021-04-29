import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from './model.sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(public http: HttpClient) { }

  storeSaleDetails(saleRef: any): void{
    // post method first parameter is url, second is json data
    // console.log(saleRef)
    this.http.post('http://localhost:9090/sales/storeSaleDetails', saleRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  getUserpurchased(id: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/sales/getUserPurchasedDetails/' + id);
  }
  getProductpurchased(product: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/sales/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/sales/getDatePurchasedDetails/' + date);
  }
  getDatesPurchased(date: any, date2: any): Observable<Sale[]> {
    return this.http.get<Sale[]> ('http://localhost:9090/sales/twoDatesPurchased/' + date + '/' + date2);
  }

}


