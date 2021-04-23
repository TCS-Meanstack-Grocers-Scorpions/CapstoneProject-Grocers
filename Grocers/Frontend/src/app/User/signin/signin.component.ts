import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model.user';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  resultMsg!: string;
  users?: Array<User>;
  constructor(public router: Router, public user: UsersService) { }

  ngOnInit(): void {
  }
  goTo(): void {
    this.router.navigate(['./signup']);
  }
  checkUser(userRef: any): void {
    console.log(userRef.id);
    this.user.retrieveUserById(userRef.id).subscribe(result => {
      console.log(result[0]._id);
    });
  }

}
