import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model.employee';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  getEmployeeByID(id: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'http://localhost:9090/emp/getEmployeeById/' + id
    );
  }

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

  // send request
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
  // update employee profile
  updateEmployeeProfile(editRef: any): void {
    console.log('updateinSVCfileReached');
    this.http
      .put('http://localhost:9090/emp/editEmployeeProfile', editRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  changeEmployeePassword(emp2Ref:any,id:any){
    this.http.put('http://localhost:9090/emp/changeEmployeePassword/'+id,emp2Ref, {
      responseType : 'text',
    }).subscribe(
      (result) => console.log(result),
        (error) => console.log(error)
    );
  }
}
