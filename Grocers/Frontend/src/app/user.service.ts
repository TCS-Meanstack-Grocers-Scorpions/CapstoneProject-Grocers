import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }
  //add method for updating user info 
  //add method for adding funds //
  updateUserInfo(userRef:any){
    this.http.put("http://localhost:9090/user/updateUserInfo",userRef,{responseType:'text'});
  }
  addFundsByID(userRef:any){
    //http client with link
  }
  getFundsByID(id:any){

  }
  getOrdersByID(id:any){

  }
}
