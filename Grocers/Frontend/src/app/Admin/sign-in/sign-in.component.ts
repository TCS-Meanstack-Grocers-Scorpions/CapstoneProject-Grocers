import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public router: Router) { }
  msg?: string;
  ngOnInit(): void {
  }

  // NEED TO ADD: get credentials from database instead of hardcoded!!!!!!!!!!!!!!!!!!!
  checkUser(loginInfo: any): void{
    if (loginInfo.username === 'Scorpion' && loginInfo.pass === 8865){
      this.router.navigate(['admin-index']);
    } else {
      this.msg = 'Incorrect username and/or password. Please try again.';
    }
  }
}
