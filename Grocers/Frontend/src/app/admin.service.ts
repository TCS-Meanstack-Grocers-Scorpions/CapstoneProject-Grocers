import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  ipAddress:string = "http://54.167.26.197:9090"
  constructor(public http: HttpClient) { }

  retrieveAdminDetails(): Observable<any[]>{
    return this.http.get<any[]>(this.ipAddress+'/admin/adminDetails');
  }
}
