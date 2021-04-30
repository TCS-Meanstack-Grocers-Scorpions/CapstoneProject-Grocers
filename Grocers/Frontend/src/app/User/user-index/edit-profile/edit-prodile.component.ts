import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';



@Component({
  selector: 'app-edit-prodile',
  templateUrl: './edit-prodile.component.html',
  styleUrls: ['./edit-prodile.component.css']
})
export class EditProdileComponent implements OnInit {
  id = sessionStorage.getItem('curUserId');
  constructor(public userSer: UsersService) { }
  displayMessage? = "";
  ngOnInit(): void {
  }

  updatePass(userRef: any): void{
    this.userSer.updateUserPassword(userRef, this.id).subscribe((result:string)=> {
      console.log(result);
      this.displayMessage = "Password Updated";
    });;
  }
  updateEmail(userRef: any): void{
    this.userSer.updateUserEmail(userRef, this.id).subscribe((result:string)=> {
      console.log(result);
    });;
  }
  updateAddress(userRef: any): void{
    this.userSer.updateUserAddress(userRef, this.id).subscribe((result:string)=> {
      console.log(result);
    });;
  }
  updatePhone(userRef: any): void{
    this.userSer.updateUserPhone(userRef, this.id).subscribe((result:string)=> {
      console.log(result);
    });;
  }
  updateDOB(userRef: any): void{
    this.userSer.updateUserDOB(userRef, this.id).subscribe((result:string)=> {
      console.log(result);
    });;
  }

}
