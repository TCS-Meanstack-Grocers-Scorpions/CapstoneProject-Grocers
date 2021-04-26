import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public user: UsersService) { }

  ngOnInit(): void {
  }
  storeUser(userRef: any): void {
   console.log(userRef);
   this.user.storeUserDetailsInfo(userRef);
 }
}
