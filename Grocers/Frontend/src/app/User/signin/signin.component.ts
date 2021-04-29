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
  numberlogin = 0;
  users?: Array<User>;
  showButton?: boolean;
  constructor(public router: Router, public user: UsersService) { }

  ngOnInit(): void {
    this.showButton = false;
  }
  goTo(): void {
    this.router.navigate(['./signup']);
  }
  goto(): void {
    this.router.navigate(['./raise-ticket']);
  }
  checkUser(userRef: any): void {
    const id = userRef.id;
    const pass = userRef.pass;
    // console.log(id, typeof(pass));
    this.user.retrieveUserById(id).subscribe(result => {
      if (result[0].locked === true) {
        alert('Your account is locked, please raise a ticket');
        this.showButton = true;
      }
      if (result[0]._id === id && result[0].pass === pass && result[0].locked === false) {
        // this.resultMsg = 'Successful Login';
        this.router.navigate(['user-index']);
        sessionStorage.setItem('curUserId', userRef.id);
        sessionStorage.setItem('token', 'user');
      }
      else {
        this.resultMsg = 'Wrong Id or Password';
        // console.log(result[0]._id, typeof(result[0].pass));
        this.numberlogin += 1;
        console.log(this.numberlogin);
        // add authguard
        if (this.numberlogin === 3) {
          // tslint:disable-next-line:no-shadowed-variable
          this.user.lockUser(userRef).subscribe((result: string) => {
            this.showButton = true;
            alert('Your account is locked, please raise a ticket');
          });
        }
      }
    });
  }

}
