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
  constructor(public router: Router, public user: UsersService) { }

  ngOnInit(): void {
  }
  goTo(): void {
    this.router.navigate(['./signup']);
  }
  checkUser(userRef: any): void {
    const id = userRef.id;
    const pass = userRef.pass;
    console.log(id, typeof(pass));
    this.user.retrieveUserById(id).subscribe(result => {
      if (result[0]._id === id  && result[0].pass === pass) {
        this.resultMsg = 'Successful Login';
      } else {
        this.resultMsg = 'Wrong Id or Password';
        console.log(result[0]._id, typeof(result[0].pass));
        this.numberlogin += 1;
        if (this.numberlogin === 3){
          result[0].locked = true;
          // tslint:disable-next-line:no-shadowed-variable
          this.user.updateUserById(userRef).subscribe((result: string) => {
            this.resultMsg = result;
          });
        }
      }
    });
  }

}
