import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public router: Router, public user: UsersService) { }

  ngOnInit(): void {
  }
  storeUser(userRef: any): void {
   console.log(userRef);
   this.user.storeUserDetailsInfo(userRef);
   this.user.getUserDetails(userRef.email).subscribe(result => {
     console.log(result);
   });
   this.router.navigate(['shopper']);
 }
}
