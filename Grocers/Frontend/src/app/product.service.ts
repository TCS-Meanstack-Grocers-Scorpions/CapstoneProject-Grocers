import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) { }

  storeProductDetails(productRef: any): void{
    // post method first parameter is url, second is json data
    this.http.post(this.ipAddress+'/product/storeProductDetails', productRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  retrieveAllProductDetails(): Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress+'/product/viewProducts');
  }

  retrieveProductById(id: any): Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress+'/product/selectProduct/' + id);
  }

  // by default all http client method return type observalbe with json format data
  deleteProductById(id: any): any{
    return this.http.delete(this.ipAddress+'/product/deleteProductById/' + id, {responseType: 'text'});
  }

  updateProductById(productRef: any): any{
    return this.http.put(this.ipAddress+'/product/updateProductById', productRef, {responseType: 'text'});
  }
}

