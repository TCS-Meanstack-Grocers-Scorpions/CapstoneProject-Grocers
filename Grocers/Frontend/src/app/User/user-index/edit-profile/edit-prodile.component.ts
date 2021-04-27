import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-edit-prodile',
  templateUrl: './edit-prodile.component.html',
  styleUrls: ['./edit-prodile.component.css']
})
export class EditProdileComponent implements OnInit {
  id = sessionStorage.getItem("curUserId");
  constructor(public userSer:UsersService) { }

  ngOnInit(): void {
  }
  
  updatePass(userRef:any){
    this.userSer.updateUserPassword(userRef,this.id);
  }
  updateEmail(userRef:any){
    this.userSer.updateUserEmail(userRef,this.id);
  }
  updateAddress(userRef:any){
    this.userSer.updateUserAddress(userRef,this.id);
  }
  updatePhone(userRef:any){
    this.userSer.updateUserPhone(userRef,this.id);
  }
  updateDOB(userRef:any){
    this.userSer.updateUserDOB(userRef,this.id);
  }
 
}
