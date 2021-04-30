import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model.employee';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) {}

  getEmployeeByID(id: any): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.ipAddress+'/emp/getEmployeeById/' + id
    );
  }

  storeEmpDetailsInfo(empRef: any): void {
    this.http
      .post(this.ipAddress+'/emp/addEmployee', empRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  // by default all http client method return type observalbe with json format data
  deleteEmpById(id: any): any {
    return this.http.delete(this.ipAddress+'/emp/deleteEmpById/' + id, {
      responseType: 'text',
    });
  }

  // send request
  sendRequestToAdmin(requestRef: any): void {
    this.http
      .post(this.ipAddress+'/request/sendRequest', requestRef, {
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
      .put(this.ipAddress+'/emp/editEmployeeProfile', editRef, {
        responseType: 'text',
      })
      .subscribe(
        (result) => console.log(result),
        (error) => console.log(error)
      );
  }
  changeEmployeePassword(emp2Ref:any,id:any){
    this.http.put(this.ipAddress+'/emp/changeEmployeePassword/'+id,emp2Ref, {
      responseType : 'text',
    }).subscribe(
      (result) => console.log(result),
        (error) => console.log(error)
    );
  }
}
