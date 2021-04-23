import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model.employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  getEmployeeByID(id:any):Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:9090/employee/getEmployeeById"+id)
  }
}
