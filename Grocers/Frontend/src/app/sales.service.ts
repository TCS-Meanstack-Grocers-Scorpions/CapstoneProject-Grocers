import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from './model.sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) { }

  storeSaleDetails(saleRef: any): void{
    // post method first parameter is url, second is json data
    // console.log(saleRef)
    this.http.post(this.ipAddress+'/sales/storeSaleDetails', saleRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  getUserpurchased(id: any): Observable<Sale[]> {
    return this.http.get<Sale[]> (this.ipAddress+'/sales/getUserPurchasedDetails/' + id);
  }
  getProductpurchased(product: any): Observable<Sale[]> {
    return this.http.get<Sale[]> (this.ipAddress+'/sales/getProductPurchasedDetails/' + product);
  }
  getDatepurchased(date: any): Observable<Sale[]> {
    return this.http.get<Sale[]> (this.ipAddress+'/sales/getDatePurchasedDetails/' + date);
  }
  getDatesPurchased(date: any, date2: any): Observable<Sale[]> {
    return this.http.get<Sale[]> (this.ipAddress+'/sales/twoDatesPurchased/' + date + '/' + date2);
  }

}


