import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public router: Router, public adminService: AdminService) { }
  msg?: string;
  username?: string;
  password?: string;
  ngOnInit(): void {
    this.adminService.retrieveAdminDetails().subscribe(result => {
      this.username = result[0].username;
      this.password = result[0].password;
    });
  }

  checkUser(loginInfo: any): void{
    if (loginInfo.username === this.username && loginInfo.pass === this.password){
      this.router.navigate(['admin-index']);
      sessionStorage.setItem('token', 'admin');
    } else {
      this.msg = 'Incorrect username and/or password. Please try again.';
    }
  }
}
