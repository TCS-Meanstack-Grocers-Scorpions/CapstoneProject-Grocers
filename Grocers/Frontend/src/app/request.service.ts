import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './model.request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) { }

  storeRequestDetails(reqRef: any): void{
    // post method first parameter is url, second is json data
    this.http.post(this.ipAddress+'/request/sendRequest', reqRef).
      subscribe(result => console.log(result), error => console.log(error));
  }

  retrieveAllRequests(): Observable<Request[]>{
    return this.http.get<Request[]>(this.ipAddress+'/request/getRequests');
  }

  deleteRequestById(id: any): any{
    return this.http.delete(this.ipAddress+'/request/deleteRequest/' + id, {responseType: 'text'});
  }
}
