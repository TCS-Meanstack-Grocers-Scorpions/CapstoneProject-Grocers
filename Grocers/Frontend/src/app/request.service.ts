import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  storeRequestDetails(reqRef: any): any{
    // post method first parameter is url, second is json data
    this.http.post('http://localhost:9090/request/sendRequest', reqRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  retrieveAllRequests(): Observable<Request[]>{
    return this.http.get<Request[]>('http://localhost:9090/request/getRequests');
  }

  deleteRequestById(id:any):any{
    return this.http.delete('http://localhost:9090/request/deleteRequest/'+id,{responseType:"text"})
  }

}
