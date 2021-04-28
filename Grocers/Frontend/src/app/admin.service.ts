import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  retrieveAdminDetails(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:9090/admin/adminDetails');
  }
}
