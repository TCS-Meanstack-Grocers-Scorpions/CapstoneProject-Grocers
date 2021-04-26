import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  storeEmpDetailsInfo(empRef: any): void {
    this.http
      .post('http://localhost:9090/emp/addEmployee', empRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  // by default all http client method return type observalbe with json format data
  deleteEmpById(id: any): any {
    return this.http.delete('http://localhost:9090/emp/deleteEmpById/' + id, {
      responseType: 'text',
    });
  }

  //send request
  sendRequestToAdmin(requestRef: any): void {
    this.http
      .post('http://localhost:9090/request/sendRequest', requestRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
}
