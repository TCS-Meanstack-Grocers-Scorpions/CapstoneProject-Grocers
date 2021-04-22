import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  homePage(){
    //token must be stored when username and password are correct
    //sessionStorage.setItem("token","123");
    this.router.navigate(["admin-index"]);
  }
}
