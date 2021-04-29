import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  storeProductDetails(productRef: any): void{
    // post method first parameter is url, second is json data
    this.http.post('http://localhost:9090/product/storeProductDetails', productRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  retrieveAllProductDetails(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:9090/product/viewProducts');
  }

  retrieveProductById(id: any): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:9090/product/selectProduct/' + id);
  }

  // by default all http client method return type observalbe with json format data
  deleteProductById(id: any): any{
    return this.http.delete('http://localhost:9090/product/deleteProductById/' + id, {responseType: 'text'});
  }

  updateProductById(productRef: any): any{
    return this.http.put('http://localhost:9090/product/updateProductById', productRef, {responseType: 'text'});
  }
}

